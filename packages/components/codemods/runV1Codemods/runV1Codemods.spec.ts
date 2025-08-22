import fs from 'fs'
import os from 'os'
import path from 'path'
import { runV1Codemods } from './runV1Codemods'

const cleanupTestDirectory = (tempDir: string): void => {
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true })
  }
}

// Helper to read files from test directory
const readTestFiles = (tempDir: string): Record<string, string> => {
  const files: Record<string, string> = {}

  const readDir = (dirPath: string, basePath = ''): void => {
    const items = fs.readdirSync(dirPath)

    items.forEach((item) => {
      const fullPath = path.join(dirPath, item)
      const relativePath = path.join(basePath, item)

      if (fs.statSync(fullPath).isDirectory()) {
        readDir(fullPath, relativePath)
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files[relativePath] = fs.readFileSync(fullPath, 'utf8')
      }
    })
  }

  readDir(tempDir)
  return files
}

const copyDirectoryToTemp = (sourceDir: string): string => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'runV1Codemods-snapshot-'))

  const copyRecursive = (src: string, dest: string): void => {
    const stat = fs.statSync(src)

    if (stat.isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true })
      }
      const items = fs.readdirSync(src)
      items.forEach((item) => {
        copyRecursive(path.join(src, item), path.join(dest, item))
      })
    } else {
      fs.copyFileSync(src, dest)
    }
  }

  copyRecursive(sourceDir, tempDir)
  return tempDir
}

describe('runV1Codemods', () => {
  describe('MockComponentDir Snapshot Tests', () => {
    it('should transform MockComponentDir files and match snapshot', async () => {
      const mockSourceDir = path.resolve(__dirname, '__fixtures__', 'MockComponentDir')
      const tempDir = copyDirectoryToTemp(mockSourceDir)

      try {
        await runV1Codemods(tempDir)
        const transformedFiles = readTestFiles(tempDir)

        // Snapshot test - this will create/update snapshots on first run
        expect(transformedFiles).toMatchSnapshot()

        // Specific assertions to ensure transformations occurred
        expect(transformedFiles['MockComponent.tsx']).toContain('actionsSlot')
        expect(transformedFiles['MockComponent.tsx']).not.toContain('actions={{')
        expect(transformedFiles['MockComponent.tsx']).toContain(
          'import { Button } from "@kaizen/components/next"',
        )

        // Check that subcomponent was transformed
        expect(transformedFiles['subcomponents/MockSubcomponent.tsx']).toContain('onPress')
        expect(transformedFiles['subcomponents/MockSubcomponent.tsx']).toContain(
          'import { Button } from "@kaizen/components/next"',
        )
      } finally {
        cleanupTestDirectory(tempDir)
      }
    })
  })
})
