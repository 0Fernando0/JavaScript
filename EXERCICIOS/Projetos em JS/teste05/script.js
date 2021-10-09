function clicar(){
    var pa = window.document.getElementById('pais')
    var n1 = String(pa.value)
    var res = window.document.getElementById('res')
    res.innerHTML = `você é de ${n1}`

    if(n1 == 'brasil' ||n1 == 'BRASIL' ||n1 == 'Brasil'){
        res.innerHTML = `Você é do ${n1}, Você É Brasileiro!`
    }else{
        res.innerHTML = `Você É do ${n1}, Você É Estrangeiro!`
    }
    }
    