//window.alert('olá')
//var bug = window.document.getElementById('bug')
var res = window.document.getElementById('res')
var t = window.document.getElementById('t')
var v = [] //global para as Funções
function adicionar(){   
        var n = window.document.getElementById('cnum').value
        var nn = Number(n)
        if((v.indexOf(nn)==-1) && (n.length!=0) && n>0 && n<101){
            v.push(nn)
            //bug.innerHTML = v //debug
            //v.length ==> tamanho do vetor
            //v[v.lenght-1] ==> ultima posicao do vetor!
            t.innerHTML+= `Valor ${v[v.length-1]} foi adicionado.\n`
            var l = ''
            res.innerHTML = l //limpa a <div>
            
        }
        else{
            window.alert('Erro: Por favor adicione outro elemento!')
        }

}
function soma(){
    var s =0
    for(var c = 0; c<v.length;c++){
        s += v[c]
    }
    return s
}


function finalizar(){
    if(v.length != 0){
        var l = ''
        res.innerHTML = l //limpa a <div>
        //v.sort()//ordena o vetor
        v.sort(function(a, b) {//resolve problema do codigo unicode
            return a - b;//a-b:crescente , b-a: decrescente
        });
            
        res.innerHTML+= `Ao todo, temos ${v.length} numeros cadastrados.`+'<br/>'
        res.innerHTML+= `O maior valor informado foi ${v[v.length-1]}.`+'<br/>'
        res.innerHTML+= `O menor valor informado foi ${v[0]}`+'<br/>'
        res.innerHTML+= `Somando todos os valores, temos ${soma()}.`+'<br/>'
        res.innerHTML+= `A média dos valores digitados é ${soma()/v.length}`+'<br/>'
        //bug.innerHTML+= '<br/>'+v //debug
    }
    else{
        window.alert('Adiciona valores antes de finalizar!')
    }
}