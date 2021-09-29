function carregar (){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date ()
var hora = data.getHours()
msg.innerHTML = `Agora São ${hora} Horas`
if(hora >= 0 && hora < 12){
    //Bom Dia
    img.src = 'fotomanha.jpg'
    document.body.style.background = 'blue'
}else if(hora >= 12 && hora <= 18) {
    //Boa Tarde
    img.src = 'fototarde.jpg'
    document.body.style.background = 'green'
}else{
    //Bom Noite
    img.src = 'fotonoite.jpg'
    document.body.style.background = 'purple'
}
}