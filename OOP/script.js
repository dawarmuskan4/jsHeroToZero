'use strict'

/*
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName
  this.birthYear = birthYear

  //bad practice - never do this
  // this.calcAge = function () {
  //   return 2023 - this.birthYear
  // }
}

const jonas = new Person('Jonas', 1991)
console.log(jonas)

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1998)
console.log(jack, matilda)
console.log(jonas instanceof Person)

//prototypes
console.log(Person.prototype)
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear)
}

jonas.calcAge()
Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species, matilda.species)
console.log(jonas.hasOwnProperty('firstName'))
console.log(jonas.hasOwnProperty('species'))

console.log('Level 3', jonas.__proto__)
//Object.prototype (top of prototype chain)
console.log('Level 2', jonas.__proto__.__proto__)
console.log('Level 1', jonas.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor)

const arr = [3, 6, 9, 2, 24, 42, 2, 2, 4, 1, 3] // new Array === []
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__)
Array.prototype.unique = function () {
  return [...new Set(this)]
}
console.log(arr.unique())


//COding challenge 1
const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}
Car.prototype.accelerate = function () {
  console.log('New Speed ', Number(this.speed) + 10, 'km/h')
}
Car.prototype.brake = function () {
  console.log('New Speed ', this.speed - 5, 'km/h')
}
const car1 = new Car('BMW', '120')
const car2 = new Car('Mercedes', '95')
car1.accelerate()
car2.brake()

//ES6 classes

// //class expression
// const PersonCl = class{}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName
    this.birthYear = birthYear
  }

  //instance method
  calcAge() {
    console.log(2037 - this.birthYear)
  }
  greet() {
    console.log(`hey ${this.firstName}`)
  }
  get age() {
    return 2037 - this.birthYear
  }

  //set a property that already exists
  set fullName(name) {
    //console.log(name)
    if (name.includes(' ')) this._fullName = name
    else alert(`${name} is not a full name`)
  }
  get fullName() {
    return this._fullName
  }
  static hey() {
    console.log('Hey there 👋')
  }
}

const jessica = new PersonCl('jessicaa davis', 1996)
console.log(jessica)
jessica.calcAge()
console.log(jessica.age)

// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`)
// }
jessica.greet()

const account = {
  owner: 'Jonas',
  movements: [200, 63, 13, 400],

  get latest() {
    return this.movements.slice(-1).pop()
  },
  set latest(mov) {
    this.movements.push(mov)
  },
}

console.log(account.latest)
account.latest = 50
console.log(account.movements)

const walter = new PersonCl('Walter WHitte', 1995)
console.log(walter)
PersonCl.hey()

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear)
  },
  init(firstName, birthYear) {
    ;(this.firstName = firstName), (this.birthYear = birthYear)
  },
}

const steven = Object.create(PersonProto)
console.log(steven)
steven.name = 'Steven'
steven.birthYear = 2002
steven.calcAge()
console.log(steven.__proto__)

const sarah = Object.create(PersonProto)
sarah.init('Sarah', 1994)
sarah.calcAge()
*/

class CarCl {
  constructor(make, speed) {
    this.make = make
    this.speed = speed
  }
  accelerate() {
    this.speed += 10
    console.log(`New speed is ${this.speed} km/h`)
  }
  brake() {
    this.speed -= 5
    console.log(`New speed is ${this.speed} km/h`)
  }
  get speedUS() {
    return this.speed / 1.6
  }
  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}

const ford = new CarCl('Ford', 120)
console.log(ford.speedUS)
ford.accelerate()
ford.accelerate()
ford.accelerate()
ford.accelerate()
ford.brake()
ford.speedUS = 50
console.log(ford)
