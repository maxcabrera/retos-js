import repeticiones from './frequency-counter-two-integers';

it('Returns 0 if no data is passed', () => {
  expect(repeticiones()).toEqual(0)
});

it('Returns NULL if the first or second value is not an integer', () => {
  expect(repeticiones('string', 123)).toEqual(null)
});

it('Returns True if both numbers are equal', () => {
  expect(repeticiones(182, 182)).toEqual(true)
});

it('Returns False if both numbers have different length', () => {
  expect(repeticiones(2811, 281)).toEqual(false)
});

it('Returns True', () => {
  expect(repeticiones(182, 281)).toEqual(true)
});

it('Returns True', () => {
  expect(repeticiones(34, 14)).toEqual(false)
});

it('Returns True', () => {
  expect(repeticiones(3589578, 5879385)).toEqual(true)
});

it('Returns True', () => {
  expect(repeticiones(22,222)).toEqual(false)
});