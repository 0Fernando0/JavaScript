function clicar(){
    var hora = new Date()
    var clicar = document.getElementById('hora')
    var res = document.getElementById('res')
    clicar = Number(clicar.value)
    if(clicar >= 0 && clicar <= 12){
        //MANHA
    document.body.style.background = 'blue'
    document.body.style.color = 'white'
    res.innerHTML = 'Agora é de Manha'
    }
    if (clicar >= 13 && clicar <= 18){
        //TARDE
        document.body.style.background = 'purple'
        document.body.style.color = 'white'
        res.innerHTML = 'Agora é de Tarde'
    }
    if (clicar >= 19 && clicar <= 24) {
        //NOITE
        document.body.style.background = 'red'
        document.body.style.color = 'white'
        res.innerHTML = 'Agora é de Noite'            
    }
    }