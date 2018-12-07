import {
  emptyValues,
  valuesAreNotNumbers,
  equalNumbers,
  lengthsAreNotEqual,
  frequenciesAreNotEqual
} from './frequency-utils'

/**
 * Esta es nuestra funcion, dividida en mini funciones.
 * This is our function, divided into mini functions
 *
 * @param primerNumero
 * @param segundoNumero
 * @returns  boolean
 */

function sameFrequency(primerNumero, segundoNumero) {
  const numbers = [primerNumero, segundoNumero]

  if(emptyValues(numbers)) return 0

  if(valuesAreNotNumbers(numbers)) return null

  if(equalNumbers(numbers)) return true

  if(lengthsAreNotEqual(numbers)) return false

  if(frequenciesAreNotEqual(numbers)) {
    return false
  } else {
    return true
  }
};

export default sameFrequency