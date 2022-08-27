var idade = 37
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Menor de idade, não vota.')
} else if (idade < 18 || idade > 65) {
     console.log('Voto facultativo.')
} else {
     console.log('Voto obrigatório.')
}