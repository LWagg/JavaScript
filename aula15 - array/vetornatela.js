let valores = [8, 1, 7, 2, 9]
valores.sort()
/*
for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}
*/

for(let posicao in valores) {
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}
