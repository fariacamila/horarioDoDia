function carregar(){
    var msg = document.querySelector('div.msg')
    var img = document.querySelector('img.imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 6){
        msg.innerHTML += `<p>Boa madrugada!</p>`
        img.src = 'imagem/madrugada.jpg'
        document.body.style.background = 'rgb(49, 49, 71)'
    }

    else if (hora >= 6 && hora < 12){
        msg.innerHTML += '<p>Bom dia!</p>'
        img.src = 'imagem/manhã.jpg'
        document.body.style.background = 'rgb(221, 164, 59)'
    }
        
    else if (hora >= 12 && hora < 18){
         msg.innerHTML += `<p>Boa tarde!</p>`
         img.src = 'imagem/tarde.jpg'
         document.body.style.background = 'rgb(228, 204, 161)'
    }
       
    else if (hora >= 18){
        msg.innerHTML += `<p>Boa noite!</p>`
        img.src = 'imagem/noite.jpg'
        document.body.style.background = 'rgb(23, 31, 32)'
    }
        
}