let num = [5,8,2,9,3]
num[5]=6    //coloca o numero 6 na posicao 5 do array
num.push(7) //coloca o numero no final do array
num.length //tamanho do vetor
num.sort() //ordena o vetor em ordem crescente
console.log(`vetor tem ${num.length} elementos : ${num}`)

/*
for (let a = 0; a < num.length; a++) {
    console.log(num[a])
    
}
*/
/*
for (let pos in num) {//para cada 'posicao' no vetor 'num' faça...
    console.log(num[pos])
}
*/

let pos = num.indexOf(8) //procura a posicao do valor pedido
console.log(pos)

