function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()



    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

    if (hora >= 6 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#f9d9a9'

    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#a05c2b'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#40314e'
    }
}