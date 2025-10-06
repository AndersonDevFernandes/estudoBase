function dividir (num) {
    console.log(num)
    if (num % 2 === 0) {
        dividir(num / 2)
    } else {
        return num
    }
}

//coloque o número dentro do parenteses que vc deseja dividir.
//dividir()

function fatorial (num) {
    console.log("Numero: " + num)
    if (num === 0) {
        return 1
    } else if (num === 1){
        return 1
    } else {
        console.log (num + "*!" + (num -1 ))
        return num * fatorial (num -1)
    }
}

console.log (fatorial())