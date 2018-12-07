import sameFrequency from './frequency-counter-two-integers';

it('Returns 0 if no data is passed', () => {
  expect(sameFrequency()).toEqual(0)
});

it('Returns NULL if the first or second value is not an integer', () => {
  expect(sameFrequency('string', 123)).toEqual(null)
});

it('Returns True if both numbers are equal', () => {
  expect(sameFrequency(182, 182)).toEqual(true)
});

it('Returns False if both numbers have different length', () => {
  expect(sameFrequency(2811, 281)).toEqual(false)
});

it('Returns True', () => {
  expect(sameFrequency(182, 281)).toEqual(true)
});

it('Returns True', () => {
  expect(sameFrequency(34, 14)).toEqual(false)
});

it('Returns True', () => {
  expect(sameFrequency(3589578, 5879385)).toEqual(true)
});

it('Returns True', () => {
  expect(sameFrequency(22,222)).toEqual(false)
});