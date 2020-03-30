//window.alert('olá')
function tabuada(){
    var n = window.document.getElementById('cnum').value
    var res = window.document.getElementById('t')
    var txt = ''
    for(var c=0; c<=10; c++){
        txt = `${txt} ${c} x ${n} =  ${n * c} \n`
    }
    res.innerHTML = txt
}