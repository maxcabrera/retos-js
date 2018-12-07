function createFrequencyObject(numero) {
  let frequencyObject = {}
  numero = numero.toString()

  for(let number of numero) {
    frequencyObject[number] = ++frequencyObject[number] || 1
  }

  return frequencyObject
}

function frequenciesAreNotEqual(primerNumero, segundoNumero) {

  let primerGrupoDeFrequecias = createFrequencyObject(primerNumero)
  let segundoGrupoDeFrequecias = createFrequencyObject(segundoNumero)

  for(let key in primerGrupoDeFrequecias) {
    if(!(segundoGrupoDeFrequecias[key])) return true
    if(segundoGrupoDeFrequecias[key] !== primerGrupoDeFrequecias[key]) return true
  }

  return false

}

function valuesAreNotNumbers(value, secondValue) {
  if(typeof value !== 'number' || typeof secondValue !== 'number') {
    return true
  }
  return false
}

function lengthsAreNotEqual(primerNumero, segundoNumero) {
  if(primerNumero.toString().length !== segundoNumero.toString().length) {
    return true
  }

  return false
}

/**
 * Esta es nuestra funcion, dividida en mini funciones.
 * This is our function, divided into mini functions
 *
 * @param primerNumero
 * @param segundoNumero
 * @returns  boolean
 */

function sameFrequency(primerNumero, segundoNumero) {

  if(!primerNumero || !segundoNumero) return 0

  if(valuesAreNotNumbers(primerNumero, segundoNumero)) return null

  if(primerNumero === segundoNumero) return true

  if(lengthsAreNotEqual(primerNumero, segundoNumero)) return false

  if(frequenciesAreNotEqual(primerNumero, segundoNumero)) {
    return false
  } else {
    return true
  }
};

export default sameFrequency