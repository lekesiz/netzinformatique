import { describe, expect, it } from 'vitest'
import { serializeJsonLd } from './jsonLd'

describe('serializeJsonLd', () => {
  it('preserves valid JSON while escaping HTML script boundaries', () => {
    const serialized = serializeJsonLd({ value: '</script><script>alert(1)</script>' })
    expect(serialized).not.toContain('</script>')
    expect(JSON.parse(serialized)).toEqual({ value: '</script><script>alert(1)</script>' })
  })

  it('escapes JavaScript line separator characters', () => {
    const serialized = serializeJsonLd({ value: `one\u2028two\u2029three` })
    expect(serialized).toContain('\\u2028')
    expect(serialized).toContain('\\u2029')
  })
})
