// ES9 nace en junio del 2018


// ############# operador de reposo ###############

const objeto = {
    name: 'jonathan',
    profesion: 'master',
    age: 300,
}

let { name, ...all } = objeto
console.log(name, all);
console.log(name);
console.log(all);

// ################## propiedades de progagación #############

obj1 = {
    name: 'jonathan',
    profesion: 'master'
}

obj2 = {
    ...obj1,
    age: 300
}

console.log(obj2);


//############## promise. finally ###############

// construimos una promesa

const myPromise = () => {
    return new Promise((resolve, reject) => {
        (true) ? resolve('promesa resuelta exitosamente'): reject(new Error('Error, promesa falló'))
    })
}

myPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('yeeeeah'))


const myPromise2 = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('myPromise2 resuelta exitosamente'), 2000): reject(new Error('myPromise2 falló'))
    })
}

myPromise2()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('oooh yeeeeah'))


// ############### regex ############################

const dataRegex = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = dataRegex.exec('1984-01-04');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)