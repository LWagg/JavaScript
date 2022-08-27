function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERRO! Verifique os dados novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 5) {
                //Criança
                img.setAttribute('src', 'bebe-homem.jpg')
            } else if (idade < 21 ) {
                //Jovem
                img.setAttribute('src', 'adolescente-homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-homem.jpg')
            } else {
                //Iddoso
                img.setAttribute('src', 'velho-homem.jpg')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-mulher.jpg')
            } else if (idade < 22 ) {
                //Jovem
                img.setAttribute('src', 'adolescente-mulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto-mulher.jpg')
            } else {
                //Iddoso
                img.setAttribute('src', 'velho-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}