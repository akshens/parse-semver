const parse = require('./parse');

it('Should throw error on invalid semver version 1.a.5', () => {
  expect(() => parse('1.a.5')).toThrow('Invalid semver version is provided')
})

it('Should parse 1.3.6-alpha.3', () => {
  expect(parse('1.3.6-alpha.3')).toEqual({ isPreRelease: true, tag: "alpha" })
})

it('Should parse 1.0.6-1', () => {
  expect(parse('1.0.6-1')).toEqual({ isPreRelease: true, tag: "dev" })
})

it('Should parse 1.3.0', () => {
  expect(parse('1.3.0')).toEqual({ isPreRelease: false, tag: "latest" })
})
