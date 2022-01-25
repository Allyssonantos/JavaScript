function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manha.jpg'
        document.body.style.background = '#FF8C00'
    } else if ( hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src ='tarde.jpg'
        document.body.style.background = '#CDB7B5'
    } else {
        //Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#607B8B'
    }
    
}