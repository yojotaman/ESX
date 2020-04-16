// ES10 nace en junio del 2019

// ########## operador flat ####################

let array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]

console.log(array.flat())
console.log(array.flat(2))
console.log(array.flat(3))


// ################ Operador faltMap ##################

let array2 = [2, 3, 4, 5, 6]

console.log(array2.flatMap(value => [value, value * 2]));

// ################# trimStart ################

let myString = '    StingConEspacios   x'
let myString2 = '    StingConEspaciosAlInicio   '
console.log(myString.trimStart()); // elimina los espacios en blanco al inicio del string
console.log(myString2.trimStart());

let myString3 = 'stringConEspaciosAlFinal    '
console.log(myString3.trimEnd());



let myString = '    StingConEspacios   x     '
console.log(myString.trim())



// ################## fromEntries ######################
// convierte arreglos a objetos

let arregloDeArreglos = [
    ['name', 'Jonathan'],
    ['age', 300]
]
console.log(Object.fromEntries(arregloDeArreglos));



// ################# 

let mySymbol = 'My Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description);