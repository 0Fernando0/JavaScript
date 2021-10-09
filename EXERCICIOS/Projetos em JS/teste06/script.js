function calcular(){
    n1 = document.getElementById('n1')
    n2 = document.getElementById('n2')
    res = document.getElementById('res')
    n1 = Number(n1.value)
    n2 = Number(n2.value)
    n3 = n1 + n2
    n4 = n1 - n2
    n5 = n1 * n2
    n6 = n1 / n2
    
    if (n1 == 0 || n2 == 0){
        window.alert('[ERRO]digite um valor')
    }else{
        res.innerHTML = `A Soma é ${n3}`
    }

}