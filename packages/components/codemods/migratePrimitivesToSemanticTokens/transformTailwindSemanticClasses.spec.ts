import { transformTailwindSemanticClasses } from './transformTailwindSemanticClasses'

describe('transformTailwindSemanticClasses()', () => {
  it('rewrites bg / text / border color utilities in a className attribute', () => {
    const input = `const A = () => <div className="bg-blue-500 text-gray-700 border-gray-500 p-2" />`
    const { code, converted } = transformTailwindSemanticClasses(input)
    expect(code).toContain('className="bg-brand-solid text-secondary border-secondary p-2"')
    expect(converted).toHaveLength(3)
  })

  it('maps fill / stroke utilities to the fg-* semantic utility', () => {
    const input = `const A = () => <div className="fill-red-500 stroke-blue-500" />`
    const { code } = transformTailwindSemanticClasses(input)
    expect(code).toContain('className="fg-error-primary fg-brand-primary"')
  })

  it('maps the same primitive to a different utility per root (context)', () => {
    const input = `const A = () => <div className="bg-blue-500 text-blue-500 border-blue-500" />`
    const { code } = transformTailwindSemanticClasses(input)
    expect(code).toContain('bg-brand-solid')
    expect(code).toContain('text-brand-primary')
    expect(code).toContain('border-brand')
  })

  it('rewrites an arbitrary-value utility', () => {
    const input = `const A = () => <div className="bg-[var(--color-blue-500)]" />`
    const { code } = transformTailwindSemanticClasses(input)
    expect(code).toContain('className="bg-brand-solid"')
  })

  it('rewrites classes inside a clsx call, including object keys', () => {
    const input = `const A = () => <div className={clsx('text-gray-700', { 'bg-blue-500': on })} />`
    const { code } = transformTailwindSemanticClasses(input)
    expect(code).toContain("'text-secondary'")
    expect(code).toContain("'bg-brand-solid'")
  })

  it('preserves a Tailwind utility prefix (goals-)', () => {
    const input = `const A = () => <div className="goals-bg-blue-500" />`
    const { code, converted } = transformTailwindSemanticClasses(input, { prefix: 'goals-' })
    expect(code).toContain('className="goals-bg-brand-solid"')
    expect(converted[0]).toMatchObject({ to: 'goals-bg-brand-solid' })
  })

  it('preserves a colon namespace prefix (EP:) and stacked variants', () => {
    const input = `const A = () => <div className="EP:bg-blue-500 hover:text-gray-700" />`
    const { code } = transformTailwindSemanticClasses(input)
    expect(code).toContain('EP:bg-brand-solid')
    expect(code).toContain('hover:text-secondary')
  })

  it('skips dynamic class names and reports unmapped / colliding color utilities', () => {
    const input = `const A = () => <div className={\`bg-\${x}\`}><span className="bg-gray-200 text-white" /></div>`
    const { code, converted, skipped } = transformTailwindSemanticClasses(input)
    expect(converted).toHaveLength(0)
    expect(code).toContain('bg-gray-200')
    expect(code).toContain('text-white')
    expect(skipped).toEqual([
      { line: 1, token: 'bg-gray-200' },
      { line: 1, token: 'text-white' },
    ])
  })

  it('leaves structural and already-semantic utilities untouched', () => {
    const input = `const A = () => <div className="bg-cover text-sm border-2 stroke-2 bg-secondary-solid" />`
    const { code, converted, skipped } = transformTailwindSemanticClasses(input)
    expect(code).toBe(input)
    expect(converted).toHaveLength(0)
    expect(skipped).toHaveLength(0)
  })

  it('leaves non-className strings untouched', () => {
    const input = `const label = "bg-blue-500"`
    const { code, converted } = transformTailwindSemanticClasses(input)
    expect(code).toBe(input)
    expect(converted).toHaveLength(0)
  })
})
