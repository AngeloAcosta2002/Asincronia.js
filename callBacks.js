function sumar (acumulado,valor, callback){
    let suma 
    setTimeout(function () {
        suma = acumulado + valor
        callback(suma)
    }, 300);
    
   // return suma
}

console.log('Al inicio del programa')
let acumulado = 0
sumar(acumulado, 4, function(suma){
    sumar(suma, 4, function(suma){
        console.log(suma)
    })
})
/*
acumulado = sumar(acumulado,4)
acumulado = sumar(acumulado,4)

console.log(acumulado)
*/
console.log('Al final del porgrama')