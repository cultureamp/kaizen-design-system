import { transformTailwindBorderClasses } from './transformTailwindBorderClasses'

describe('transformTailwindBorderClasses()', () => {
  it('rewrites a named border color utility in a className attribute', () => {
    const input = `const A = () => <div className="border border-gray-500 p-2" />`
    const { code, converted } = transformTailwindBorderClasses(input)
    expect(code).toContain('className="border border-secondary p-2"')
    expect(converted).toEqual([{ line: 1, from: 'border-gray-500', to: 'border-secondary' }])
  })

  it('rewrites an arbitrary-value border utility', () => {
    const input = `const A = () => <div className="border-[var(--color-blue-500)]" />`
    const { code } = transformTailwindBorderClasses(input)
    expect(code).toContain('className="border-brand"')
  })

  it('rewrites classes inside a clsx call, including object keys', () => {
    const input = `const A = () => <div className={clsx('border-red-500', { 'border-gray-600': on })} />`
    const { code } = transformTailwindBorderClasses(input)
    expect(code).toContain("'border-error'")
    expect(code).toContain("'border-primary'")
  })

  it('preserves a Tailwind utility prefix (goals-)', () => {
    const input = `const A = () => <div className="goals-border-gray-500" />`
    const { code, converted } = transformTailwindBorderClasses(input, { prefix: 'goals-' })
    expect(code).toContain('className="goals-border-secondary"')
    expect(converted[0]).toMatchObject({ to: 'goals-border-secondary' })
  })

  it('preserves a colon namespace prefix (EP:) and stacked variants', () => {
    const input = `const A = () => <div className="EP:border-gray-500 hover:border-blue-500" />`
    const { code } = transformTailwindBorderClasses(input)
    expect(code).toContain('EP:border-secondary')
    expect(code).toContain('hover:border-brand')
  })

  it('skips dynamic class names and reports unmapped border colors', () => {
    const input = `const A = () => <div className={\`border-\${side}\`}><span className="border-yellow-700" /></div>`
    const { code, converted, skipped } = transformTailwindBorderClasses(input)
    expect(converted).toHaveLength(0)
    expect(code).toContain('border-yellow-700')
    expect(skipped).toEqual([{ line: 1, token: 'border-yellow-700' }])
  })

  it('leaves non-className strings untouched', () => {
    const input = `const label = "border-gray-500"`
    const { code, converted } = transformTailwindBorderClasses(input)
    expect(code).toBe(input)
    expect(converted).toHaveLength(0)
  })
})
