/* 1. Desafio: Conversor de Horários */

function conversorHorario(horasFormatada) {
  let tamanhoStringHoras = horasFormatada.length

  const posfixo = horasFormatada.substring(tamanhoStringHoras - 2, tamanhoStringHoras)

  horasFormatada = horasFormatada.replace(posfixo, '')
  let [horas, ...novoHorario] = horasFormatada.replace(posfixo, '').split(':')

  let novasHoras = horas

  if (posfixo === 'PM') {
    novasHoras = +novasHoras + 12
  }

  novoHorario.unshift(String(novasHoras))

  return novoHorario.join(':')
}

console.log(conversorHorario('06:15:25PM'))
console.log(conversorHorario('06:15:25AM'))
