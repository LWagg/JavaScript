function calcular() {
    let numero = document.getElementById('numero')
    var resposta = document.getElementById('resposta')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!')
        resposta.innerHTML == 'Nenhum número digitado'
    }  else {
        var n = Number(numero.value)
        let c = 1
        resposta.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            resposta.appendChild(item)
            c++
        }
    } 
}
