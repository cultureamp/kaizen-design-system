import fs from 'fs'
import path from 'path'
import { decodeEmptyLines, encodeEmptyLines } from './emptyLineEncoder'

describe('encodeEmptyLines()', () => {
  it('replaces empty lines with default line marker', () => {
    const filePath = path.resolve(path.join(__dirname, './__fixtures__/KaioComponent.tsx'))
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const output = encodeEmptyLines(fileContent)
    expect(output).toMatchSnapshot()
  })
})

describe('decodeEmptyLines()', () => {
  it('replaces default line marker with empty line', () => {
    const filePath = path.resolve(path.join(__dirname, './__fixtures__/KaioComponent.tsx'))
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const output = decodeEmptyLines(fileContent)
    expect(output).toMatchSnapshot()
  })
})
