'use strict'

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
}

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// //for of loop
// for (const item of menu) console.log(item)

// for (const [i, el] of menu.entries()) console.log(`${i + 1}:${el}`)

// const arr = [2, 3, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //array destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);

// const { name, openingHours, categories } = restaurant
// //console.log(name, openingHours, categories)

// const arr = [7, 8, 9]
// //Spread because on the right side of the assignment operator
// const newArray = [1, 2, ...arr]
// //console.log('Spread', newArray)

// //REST because on the left side of the assignment operator
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// //console.log('Rest ', a, b, others)

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]
// //console.log(pizza, risotto, otherFood)

// // Rest parameter and functions
// const add = function (...numbers) {
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   //console.log(sum)
// }

// add(2, 3)
// add(3, 45, 251)
// add(4, 65, 13, 516, 613, 53, 62)

// const x = [23, 5, 7]
// //spread operator used
// add(...x)

// //short circuiting
// // console.log(3 || 'Jonas')
// // console.log('' || 'Jonas')
// // console.log(true || 0)
// // console.log(undefined || null)
// // console.log(undefined || 0 || '' || 'Jonas' || 23 || null)

// restaurant.numGuests = 0
// const guests = restaurant.numGuests || 10
// console.log(guests)

// //NULLISH COALESCING OPERATOR
// const guestCorrect = restaurant.numGuests ?? 10
// console.log(guestCorrect)

//AND operator
// console.log(0 && 'Muskan')
// console.log(7 && 'Muskan')
// console.log('Hello' && 23 && null && 'jonas')

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach')
// }
// restaurant.orderPizza &&
//   restaurant.orderPizza('mushroom', 'spinach', 'cheese', 'corn')

//maps fundamentals

// const rest = new Map()
// rest.set('name', 'Classico Italiano')
// rest.set(1, 'Firenze, Italy')
// console.log(rest.set(2, 'Lisbon, Portugal'))
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(')

// console.log(rest.get('name'))
// console.log(rest.get(true))

// const time = 9
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'CORRECT'],
  [false, 'Try again'],
])
console.log(question)

//convert Object to Map
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap)

//Quiz app
console.log(question.get('question'))
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`)
}
const answer = Number(prompt('Your Answer '))
console.log(answer)
console.log(question.get(question.get('correct') === answer))
