var idade = 55
console.log(`você tem ${idade} anos`)
if (idade >= 18){
    console.log('você é de Maior')
}else{
    console.log('você é de Menor')
}
if (idade < 16){
    console.log('não vota')
}else
if (idade < 18 || idade > 65){
    console.log('voto opcional')
}else {
    console.log('voto obrigatorio')
}