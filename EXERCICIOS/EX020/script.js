function gerar(){
    var n = document.getElementById('num')
    var tab = document.getElementById('tab')
    if(n.value.length == 0){
        window.alert('Por Favor Digite Um Número')
        
    }else{
        var n = Number(n.value)
        tab.innerHTML = ``
        for (var c = 1;c <= 10;c ++){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        }
    }
   
    
}