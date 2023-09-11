// LE NOVITÀ DI ES6

// dichiarazione di variabili con let/const
// let dichiari una variabile dal contenuto riassegnabile
// const dichiara una "constant variable", ovvero una scatola con un valore che non potrà cambiare in futuro

const array = [1, 2, 3]
// NON POSSIAMO FARE -> array = 'stefano'
array.push(4) // <-- aggiungo 4 alla fine di array, questo SI PUÒ FARE perchè il valore della costante è sempre lo stesso

const myObject = {
  name: 'Stefano',
}

// NON POSSIAMO FARE -> myObject = 5
myObject.name = 'Gino' // <-- cambio solamente il valore di una proprietà
myObject.surname = 'Paoli' // aggiungere una nuova proprietà
delete myObject.name // posso anche eliminare una proprietà

// FUNZIONI, come si creano?
// 1)

meow() // <-- esecuzione di funzione
// il fatto di poter invocare meow() prima di averla dichiarata è una cattiva prassi,
// permessa solamente dal costrutto "function" di JS che effettua un hoisting automatico
// e quindi sarebbe meglio non impararla

function meow() {
  console.log('MIAO')
}

// 2)
// impariamo invece QUESTA sintassi, che non permette di invocare meow2() prima di dichiararla
// perchè non viene effettuato un hoisting automatico

const meow2 = function () {
  console.log('MIAO2')
}

meow2() // <-- esecuzione di funzione

// 3) ARROW FUNCTION (funzioni freccia)
const meow3 = () => {
  console.log('MIAO3')
  console.log(this) // <-- una funzione freccia NON ha un proprio this, ma eredita quello del proprio parent
}

meow3() // <-- esecuzione di funzione
// la 2) e la 3) sono abbastanza simili, anche le arrow functions NON effettuano l'hoisting
// (quindi si comportano come è lecito aspettarsi)
// differenza principale: le funzioni freccia NON possiedono un proprio valore per la parola chiave "this"

console.log('THIS', this)

// CLONAZIONE DI OGGETTI
const obj1 = {
  firstName: 'Gianni',
}

const obj2 = obj1
// obj2 non è un clone di obj1, ma solamente un altro modo di accedervi

const obj3 = Object.assign({}, obj1) // vera e propria copia di tutte le proprietà di obj1
// obj3 è un vero e proprio clone!

// SPREAD OPERATOR
// lo spread operator "..." è un operatore che vi può aiutare a clonare oggetti/array
const obj4 = { ...obj1 } // ...obj1 significa trasportare dentro questo nuovo oggetto TUTTE LE COPPIE CHIAVE/VALORE di obj1
console.log(obj4.firstName)

obj1.firstName = 'Morandi'

console.log(obj4.firstName) // rimane "Gianni", quindi obj1 e obj4 sono due oggetti distinti e indipendenti!

const arr1 = [1, 2, 3]
const arr2 = arr1 // non è una vera copia, ma ora arr2 è un altro nome con cui accedere allo stesso array!

const arr3 = [...arr1] // trasporto tutti i valori di arr1 dentro una nuova "casa", copiandoli!

arr1.pop() // rimuove l'ultimo elemento di arr1, che rimane [1, 2]
console.log(arr3) // contiene sempre 3 elementi, perchè è stato creato come copia indipendente di arr1

const richerObj1 = {
  ...obj1, // ora il mio punto di partenza è obj1
  age: 78, // e aggiungo una nuova proprietà
}

console.log(richerObj1)

const arr4 = [...arr3, 4]
console.log(arr4)

// per copiare semplicemente una proprietà da un altro oggetto, non serve lo spread operator
const x1 = {
  color: 'black',
  wheels: 4,
  cost: 50000,
}

const x2 = {
  wheels: x1.wheels,
}

// clonare gli array con slice()
const newArr = [1, 2, 3]
const newArr2 = newArr.slice() // ha creato una copia di una fetta grande come tutto l'array
newArr.pop()
console.log(newArr2)

// REST PARAMETERS
const manipulateStrings = function (...str) {
  // lo scopo è di concatenare tutte le stringhe ricevute come parametro
  //   console.log(str)
  // str è un rest parameters, quindi è un array con TUTTI i parametri ricevuti al suo interno
  let result = ''
  for (let i = 0; i < str.length; i++) {
    result += str[i] + ' '
  }

  return result
}

console.log(manipulateStrings('ciao', 'io', 'sono', 'stefano'))
console.log(manipulateStrings('ciao', 'io', 'sono', 'gianni', 'morandi'))

// DESTRUCTURING
const dog = {
  name: 'Pluto',
  age: 3,
  numberOfPaws: 4,
  canFly: false,
}

// const name = dog.name // name vale 'Pluto'
// const age = dog.age // 3
// const canFly = dog.canFly // false

const { name, age, canFly } = dog // ho creato due variabili costanti, "name" e "age", come prima; ho però contemporaneamente
// anche dichiarato il loro valore, assegnandole "dog" --> questo comporta che name sarà dog.name e age sarà dog.age
// console.log(name) // 'Pluto'
// console.log(age) // 3
// console.log(canFly) // false

const ogg1 = {
  floors: 5,
  color: 'white',
}

const ogg2 = {
  ...ogg1,
  floors: 6,
}

// quanti piani ha ogg1 <-- 5
// quanti piani ha ogg2 <-- 6
console.log(ogg2.color)

const calculateArea = function (...l) {
  // ora l è un array con TUTTI i parametri dentro
  return l[0] * l[1]
}

console.log(calculateArea(3, 5))

// TEMPLATE LITERALS
// terzo limitatore possibile per una stringa in JS: il cosiddetto "backtick" `

const string1 = 'Hello world'
const string2 = `Hello world`

const myName = 'Stefano'
const myAge = 18
console.log(`il mio nome è ${myName} e ho ${myAge} anni`) // "il mio nome è Stefano"

// UNIONE/CONCATENAZIONE DI ARRAY
const myArr1 = ['cane', 'gatto']
const myArr2 = ['criceto', `porcellino d'india`]

// metodo con .concat()
const allTheAnimals = myArr1.concat(myArr2)
console.log(allTheAnimals)

// metodo con lo spread operator (...)
const allTheAnimalsSpread = [...myArr1, ...myArr2]
console.log(allTheAnimalsSpread)

const arrayOfDeletedAnimals = allTheAnimals.splice(2, 1, 'redfish')
console.log(arrayOfDeletedAnimals) // .splice() modifica l'array su cui lo chiamate e RITORNA un nuovo array composto
// solo dagli elementi che sono stati rimossi

const eros = {
  bootcamp: 'EPICODE',
  sayHello: function () {
    // questo, ovvero una funzione in un oggetto, è detto METODO
    console.log('Ciao! Sono Eros')
  },
}

eros.bootcamp // 'EPICODE', una proprietà
eros.sayHello() // invoca sayHello() dentro eros, e stampa in console il ciao

// NUOVI ARRAY METHODS IN ES6

// FOREACH
const vips = ['Gianni Morandi', 'Gino Paoli', 'Adriano Celentano']
// for (let i = 0; i < vips.length; i++) {
//   console.log(vips[i])
// }

vips.forEach(function (currentVip) {
  // questa funzione verrà eseguita 3 volta, una volta per ogni elemento di vips
  console.log(currentVip)
})
// forEach accetta un parametro: una FUNZIONE, che a sua volta riceverà come parametro uno degli elementi dell'array alla volta

// ulteriore semplificazione della sintassi: usiamo le ARROW FUNCTIONS () => {}
vips.forEach((currentVip) => {
  // espone un valore dell'array (che chiamiamo currentVip ad es.) alla volta
  console.log(currentVip)
})

// es. extreme :)
// const logMe = function (str) {
//   console.log(str)
// }
// vips.forEach(logMe)

// .map() e differenze con .forEach()
// il metodo .map() si usa per trasformare un array in un altro array
const numericArray = [5, 76, 100]
// ora voglio creare un nuovo array, in cui tutti a tutti gli elementi viene aggiunto il valore 5
// const result = []
// for (let i = 0; i < numericArray.length; i++) {
//   result.push(numericArray[i] + 5)
// }
// // result è [10, 81, 105]
const result = numericArray.map((currentNumber) => {
  return currentNumber + 5
})
// // result è [10, 81, 105]
console.log('result', result)

const capitalVips = vips.map((vip) => {
  return vip.toUpperCase()
})
console.log('capitalVips', capitalVips)
// importante il RETURN nella callback, altrimenti tornerà undefined!
// importante anche salvare il risultato del .map() in un'altra variabile, altrimenti abbiamo perso il risultato

const filteredNumbers = numericArray.filter((currentNumber) => {
  return currentNumber > 50 // currentNumber farà parte dell'array filteredNumbers solamente se è maggiore di 50
  // se il return torna true, allora l'elemento farà parte dell'array "filtrato"
})
// filteredNumbers è [76, 100]
console.log('filteredNumbers', filteredNumbers)

const names = ['Stefano', 'Salvatore', 'Nemanja', 'Cristina']

const namesWithS = names.filter((n) => {
  return n.slice(0, 1) === 'S'
  // butta dentro l'array risultante l'elemento n a patto che passi la condizione del return
})
console.log('namesWithS', namesWithS)

// REDUCE
// reduce "compatta" un array dentro un unico valore, calcolato applicando la stessa funzione su tutti gli elementi dell'array

const numeric = [5, 7, 9, 13]

// voglio calcolare la somma
const somma = numeric.reduce((acc, n) => {
  return acc + n
}, 0)
// 34
console.log(somma)

const nomi = ['Stefano', 'Gerardo']

const nomeConS = nomi.find((nome) => {
  // return nome.startsWith('S')
  return nome.slice(0, 1) === 'S'
})

console.log(nomeConS)

const indiceNomeConS = nomi.findIndex((nome) => {
  // return nome.startsWith('S')
  return nome.slice(0, 1) === 'S'
})

// 0

const animals = [
  {
    name: 'cat',
    paws: 4,
  },
  {
    name: 'parrot',
    paws: 2,
  },
]

const biped = animals.find((animal) => {
  return animal.paws === 2
})
console.log(biped)
