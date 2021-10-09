var num = [5,8,4]
num.push(1)
num.sort()
console.log(`${num}`)
console.log(`O Vetor tem ${num.length} posições`)
console.log(`o primeiro vetor é ${num[0]}`)
var pos = num.indexOf(8)
if (pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(`o valor está na posição ${pos}`)
}