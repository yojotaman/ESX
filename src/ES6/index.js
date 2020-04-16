// ####################### Default params ##########################

function myFunction(name, lastName, age) {
    var name = name || 'Jonathan'
    var lastName = lastName || 'Salazar'
    var age = age || 36
    console.log(name, lastName, age)
}

// ES6

function myFunction2(name = 'John', lastName = 'Doe', age = 35) {
    console.log(name, lastName, age)
}

myFunction()
myFunction2()
myFunction2('peter', 'pan', 14)



// ############## Concatenación #############################

let hello = 'hello'
let world = 'world'

let frase = hello + ' ' + world

// en ES6 se concatena con strings literals

let fraseES6 = `${hello} ${world}`

console.log(frase);
console.log(fraseES6);

let multilinea = 'Non velit reprehenderit aute esse.\n' +
    'Deserunt ex tempor anim elit labore ut ullamco laboris mollit.'

let multilinea2 = `Cupidatat nulla consectetur mollit qui irure aliqua sint pariatur aliqua aliqua.
Culpa sunt nostrud excepteur nulla sint nostrud cillum tempor.`

console.log(multilinea);
console.log(multilinea2);


// ################### Destructuración #######################//

let persona = {
    'nombre': 'John',
    'apellido': 'Doe',
    'edad': 20
}

console.log(persona.nombre, persona.apellido, persona.edad);

let { nombre, apellido, edad } = persona
console.log(nombre, apellido, edad);


// ################## Operador spread (propagación) #######################

let equipo1 = ['Hugo', 'Paco', 'Luis']
let equipo2 = ['Jonathan', 'Ricardo', 'Andres']

let equipoCompleto = ['Thor', ...equipo1, ...equipo2]

console.log(equipoCompleto);


// ################# manejo del scope #################

{
    var globalVar = 'globalVar'
}

{
    var globalLet = 'globalLet'
    console.log(globalLet);
}

console.log(globalVar);

//  Objetos

let name = 'Jota'
let age = 25

// ES5
objeto = {
        nombre: name,
        edad: age
    }
    // ES6
obj2 = { name, age }
console.log(obj2);



// ################## Arrow functions #################

let personas = [
    { name: 'John', age: 25 },
    { name: 'Carl', age: 30 }
]

// ES5

let listaDeNombres = personas.map(function(item) {
    console.log(item.name);
})

// ES6 
let listaDeNombres2 = personas.map(item => console.log(item.name))



// ############ PROMESAS #####################


const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Promesa resuelta de forma exitosa');
        } else {
            reject('Lo siento ha ocurrido un error');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    // .then(console.log('Yeeeah'))
    .catch(err => console.log(err))


const myPromise = () => {
    return new Promise((resolve, reject) => {
        if (2 == 2) {
            resolve('Ñeeeeehhh')
        } else {
            reject('Plop!!!')
        }
    })
}

myPromise()
    .then(res => console.log(res))
    .catch(err => console.log(err))

// ################### Manejo de clases en Javascript ####################


class Calculadora {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculadora();
console.log(calc.sum(10, 20));


// ################ Manejo de módulos ##################//

'use strict'

import { name } from './module';
console.log(name);



// ################### GENERATORS ############################
// Retornas una serie de valores segun el algoritmo definido

function* helloWorld() {
    if (true) {
        yield('hello, ')
    }
    if (true) {
        yield('world')
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);