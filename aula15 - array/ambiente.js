let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições.`)
console.log(`Nosso vetor é o ${num}`)
console.log(`A primeira posição do vetor tem o valor ${num[0]}`)
let posicao = num.indexOf(5)
if (posicao == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${posicao}`)
}
