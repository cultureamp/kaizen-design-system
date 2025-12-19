import fs from 'fs'
import os from 'os'
import path from 'path'
import { vi } from 'vitest'

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
    it('should transform MockComponentDir files and match snapshot', () => {
      const mockSourceDir = path.resolve(__dirname, '__fixtures__', 'MockComponentDir')
      const tempDir = copyDirectoryToTemp(mockSourceDir)

      try {
        runV1Codemods(tempDir)
        const transformedFiles = readTestFiles(tempDir)

        expect(transformedFiles).toMatchSnapshot()

        expect(transformedFiles['MockComponent.tsx']).toContain('actionsSlot')
        expect(transformedFiles['MockComponent.tsx']).not.toContain('actions={{')
        expect(transformedFiles['MockComponent.tsx']).toContain('Button')
        expect(transformedFiles['MockComponent.tsx']).toContain(`from '@kaizen/components'`)

        expect(transformedFiles['subcomponents/MockSubcomponent.tsx']).toContain('onPress')
        expect(transformedFiles['subcomponents/MockSubcomponent.tsx']).toContain(
          'import { Button } from "@kaizen/components/next"',
        )
      } finally {
        cleanupTestDirectory(tempDir)
      }
    })
  })
  describe('MockFailedComponentDir Failed', () => {
    it('should throw an Error and exit on a failed codemod', () => {
      const mockSourceDir = path.resolve(__dirname, '__fixtures__', 'MockFailedComponentDir')
      const tempDir = copyDirectoryToTemp(mockSourceDir)

      try {
        const exitSpy = vi
          .spyOn(process, 'exit')
          .mockImplementation((code?: string | number | null | undefined) => {
            throw new Error(`process.exit(${code})`)
          })

        expect(() => runV1Codemods(tempDir)).toThrow('process.exit(1)')
        expect(exitSpy).toHaveBeenCalledWith(1)
        exitSpy.mockRestore()
      } finally {
        cleanupTestDirectory(tempDir)
      }
    })
  })
})
