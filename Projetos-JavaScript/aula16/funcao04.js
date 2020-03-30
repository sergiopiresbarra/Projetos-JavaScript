function fatorial(n){
let f = 1
    for (let c = n;  c>=1; c--) {
        f = f * c 
        //5! = 5 x 4 x 3 x 2 x 1
    }
    return f
}

console.log(fatorial(5))