function repeticiones(primerNumero, segundoNumero) {
  if(!primerNumero || !segundoNumero) {
    return 0
  }

  if(typeof primerNumero !== 'number' || typeof segundoNumero !== 'number') {
    return null
  }

  if(primerNumero === segundoNumero) {
    return true
  }

  const primerNumeroEnString = primerNumero.toString()
  const segundoNumeroEnString = segundoNumero.toString()
  const lengthPrimerNumero = primerNumeroEnString.length
  const lengthSegundoNumero = segundoNumeroEnString.length

  if(lengthPrimerNumero !== lengthSegundoNumero) {
    return false
  }

  let primerGrupoDeFrequecias = {}
  let segundoGrupoDeFrequecias = {}

  for(let number of primerNumeroEnString) {
    primerGrupoDeFrequecias[number] = ++primerGrupoDeFrequecias[number] || 1
  }

  for(let number of segundoNumeroEnString) {
    segundoGrupoDeFrequecias[number] = ++segundoGrupoDeFrequecias[number] || 1
  }

  for(let key in primerGrupoDeFrequecias) {
    if(!(segundoGrupoDeFrequecias[key])) return false
    if(segundoGrupoDeFrequecias[key] !== primerGrupoDeFrequecias[key]) return false
  }

  return true
};

export default repeticiones