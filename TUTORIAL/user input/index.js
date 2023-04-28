// entrada de dados


/*
while(true){
    let nome = window.prompt("Qual o Seu Nome?")
    if(nome.trim() == ""){
        window.alert("[ERROR] INSIRA UM NOME")
    }
    else{
        window.alert(`Seja Bem-Vindo ${nome}`)
        break
    }
}
*/
let nome


document.getElementById("enviar").onclick = function(){
    nome = document.getElementById("name").value
    document.getElementById("saida").innerHTML = nome
}