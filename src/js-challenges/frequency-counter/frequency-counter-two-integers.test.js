import sameFrequency from './frequency-counter-two-integers';
import {
  emptyValues,
  valuesAreNotNumbers,
  equalNumbers,
  lengthsAreNotEqual,
  frequenciesAreNotEqual
} from './frequency-utils'

it('Returns true if one of the values is empty', () => {
  expect(emptyValues([1])).toEqual(true)
})

it('Returns false if we have two numbers', () => {
  expect(emptyValues([1,2])).toEqual(false)
})

it('Returns true if any of the values is not a number', () => {
  expect(valuesAreNotNumbers([1,'hello'])).toEqual(true)
})

it('Returns false if both values are numbers', () => {
  expect(valuesAreNotNumbers([1,2])).toEqual(false)
})

it('Returns true if numbers are equal', () => {
  expect(equalNumbers([1,1])).toEqual(true)
})

it('Returns true if numbers length are not equal', () => {
  expect(lengthsAreNotEqual([1,22])).toEqual(true)
})

it('Returns false if numbers length are equal', () => {
  expect(lengthsAreNotEqual([1,1])).toEqual(false)
})

it('Returns true if frequencies are not equal', () => {
  expect(frequenciesAreNotEqual([1,22])).toEqual(true)
})

it('Returns false if frequencies are equal', () => {
  expect(frequenciesAreNotEqual([123,321])).toEqual(false)
})

it('Returns false if numbers are not equal', () => {
  expect(equalNumbers([1,2])).toEqual(false)
})

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