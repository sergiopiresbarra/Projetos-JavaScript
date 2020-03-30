function contar(){
    var n1 = (window.document.getElementById('cn1').value)
    var n2 = (window.document.getElementById('cn2').value)
    var p = (window.document.getElementById('cn3').value)
    var res = window.document.getElementById('res')
    var inicio = Number(n1)
    var fim = Number(n2)
    var passo = Number(p)
    //res.innerText = `n1=${n1},n2=${n2},p=${p}.`
    var s =''
    if(n1.length == 0 || n2.length == 0 || p.length == 0){
        window.alert('Por favor Informe os Valores!')
    }else{ 
        if((passo != 0) && (passo > 0)){
            if(fim>inicio){    
                for(inicio;inicio<=fim;inicio=inicio+passo){
                    s = s + ` ${inicio} \u{1F449}`
                }
                res.innerHTML = s + '\u{1F3C1}'
            }
            else{
                for(inicio;inicio>=fim;inicio=inicio-passo){
                    s = s + ` ${inicio} \u{1F449}`
                }
                res.innerHTML = s + '\u{1F3C1}'
            }
        }
        else{
            window.alert('Por favor informe um Passo maior que 0')
        }
    }
}