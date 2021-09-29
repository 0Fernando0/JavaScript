function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]VERIFIQUE O ANO E TENTE NOVAMENTE')
                                                           }
        else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
             }
            if (fsex[0].checked){
                gênero = 'HOMEM'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagemM/tipo1M.jpg')
                                        }
            else if (idade < 21){
                //joven
                img.setAttribute('src', 'imagemM/tipo2M.jpg')
                                }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagemM/tipo3M.jpg')
                                }
            else{
                //idoso
                img.setAttribute('src', 'imagemM/tipo4M.jpg')
                }
                                }
            else if(fsex[1].checked){
                gênero = 'MULHER'
                                    }
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagemF/tipo1F.jpg')
                                        }
            else if (idade < 21){
                //jovem
                img.setAttribute('src', 'imagemF/tipo2F.jpg')
                                }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagemF/tipo3F.jpg')
                            }
            else{
                //idoso
                img.setAttribute('src', 'imagemF/tipo4F.jpg')
                }
                     
    res.style.textAlign = 'center'
    res.innerHTML = `detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
}

