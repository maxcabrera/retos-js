export function createFrequencyObject(numero) {
  let frequencyObject = {}
  numero = numero.toString()

  for(let number of numero) {
    frequencyObject[number] = ++frequencyObject[number] || 1
  }

  return frequencyObject
}

export function frequenciesAreNotEqual(numbers) {

  let primerGrupoDeFrequecias = createFrequencyObject(numbers[0])
  let segundoGrupoDeFrequecias = createFrequencyObject(numbers[1])

  for(let key in primerGrupoDeFrequecias) {
    if(!(segundoGrupoDeFrequecias[key])) return true
    if(segundoGrupoDeFrequecias[key] !== primerGrupoDeFrequecias[key]) return true
  }

  return false

}

export function valuesAreNotNumbers(numbers) {
  if(typeof numbers[0] !== 'number' || typeof numbers[1] !== 'number') {
    return true
  }
  return false
}

export function lengthsAreNotEqual(numbers) {
  if(numbers[0].toString().length !== numbers[1].toString().length) {
    return true
  }

  return false
}

export function emptyValues(numbers) {
  if(!numbers[0]) return true
  if(!numbers[1]) return true
  return false
}

export function equalNumbers(numbers) {
  return numbers[0] === numbers[1]
}