// ES8 nace en junio del 2017

// ############### Object.entries ###########
// permite generar una matriz a partir de un objeto

const data = {
    front: 'Johan',
    back: 'Santiago',
    master: 'Jonathan',
}

const entries = Object.entries(data)
console.log(entries);
console.log(entries.length);

// ############### Object.values #################
// observar caracteristica de traling commas en los objetos
// permite que no haya errores generados por la coma al final del ultimo elemnto del arreglo

const data = {
    front: 'Johan',
    back: 'Santiago',
    master: 'Jonathan',
}

const values = Object.values(data)
console.log(values);
console.log(values.length);

// ############## padding ##################


const string = 'HolaMundo'

console.log(string.padStart(15, '   '));
console.log(string.padEnd(15, '---'));
console.log('hey'.padEnd(15, ' ---'));


// ############ Async Await ##################//#endregion

// se define una funcion que devuelve una promesa

const myPromise = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hola desde una promesa'), 2000): reject(new Error('promesa fallida'))
    })
}

// se define funcion asincrona (observa el uso de la palabra reservada Async)
const helloAsync = async() => {
    const hello = await myPromise() // observar la palabra reservada await utilizado para esperar a que la promesa resuelva
    console.log(hello);
}


const anotherAsyncFunction = async() => {
    try {
        const hello = await myPromise()
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

helloAsync() // no olvidar realizar la invocación de la función asincrona
anotherAsyncFunction()