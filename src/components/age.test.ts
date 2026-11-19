import { expect, test } from 'vitest'
import { ageAt, parts } from './age'

test('counts from one birthday to the next', () => {
  expect(ageAt(new Date(2026, 2, 10))).toBe(15)
  expect(ageAt(new Date(2026, 2, 9, 23, 59))).toBeGreaterThan(14.99)
  expect(ageAt(new Date(2026, 2, 9, 23, 59))).toBeLessThan(15)
  expect(ageAt(new Date(2026, 8, 8))).toBeCloseTo(15.5, 1)
})

test('never shows the next age early', () => {
  expect(parts(15.9999999999)).toEqual(['15', '.999999999'])
  expect(parts(15.05)).toEqual(['15', '.050000000'])
})
