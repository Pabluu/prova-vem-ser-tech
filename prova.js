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

// 2. Quantidade de Palavras
function quantidadePalavras(frase) {
  let indexParada = 0
  let novaFrase = []

  for (let index in frase) {
    let letra = frase[index]
    if (letra.toUpperCase() === letra) {
      novaFrase.push(frase.substring(indexParada, index))
      indexParada = index
    }
  }

  return novaFrase.length
}

console.log(quantidadePalavras('façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa'))


// 3. Número Solitário

function numeroSolitario(valores){
  novoArray = []

  for(let valor of valores) {
    if(!novoArray.includes(valor)){
      novoArray.push(valor)
    }
  }

  return novoArray
}

console.log(numeroSolitario([12, 17, 15, 19, 22, 17, 19, 12]))

// 4. Qual é a saída do código a seguir?
// Alternativa "E"
// 1 1 2 1 2 3 1 2 3 4


// 5. Qual é o resultado da expressão booleana abaixo?
// Alternativa "A"
// true

// 6. Qual o valor da saída do código abaixo?
// Alternativa "B"
// 2