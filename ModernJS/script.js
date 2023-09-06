//importing module
// import { addToCart, totalPrice as price, tq } from './ShoppingCart.js'
// addToCart('bread', 5)
// console.log(price, tq)
/*
console.log('Importing Module')

// import * as ShoppingCart from './ShoppingCart.js'
// ShoppingCart.addToCart('bread', 5)
// console.log(ShoppingCart.totalPrice)

// import add, { addToCart, totalPrice as price, tq } from './ShoppingCart.js'
// add('peanut butter', 1)
// console.log(price, tq)

import add, { cart } from './ShoppingCart.js'
add('peanut butter', 1)
add('bread', 5)
add('pizza', 10)
add('cheesecake', 10)

console.log(cart)

// console.log('start fetching')
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await res.json()
// console.log(data)
// console.log('end fetching')

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  return { title: data.at(-1).title, text: data.at(-1).body }
}
const lastPost = getLastPost()
console.log(lastPost)

const lastPost2 = await getLastPost()
console.log(lastPost2)


const ShoppingCart2 = (function () {
  const cart = []
  const shippingCost = 10
  const totalPrice = 237
  const totalQuantity = 23

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} added to cart`)
  }

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} ordered from supplier`)
  }

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  }
})()

ShoppingCart2.addToCart('apple', 4)
ShoppingCart2.addToCart('pizza', 2)
console.log(ShoppingCart2)
console.log(ShoppingCart2.shippingCost)
*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js'

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 50 },
  ],
  user: { loggedIn: true },
}
const stateClone = Object.assign({}, state)
const stateDeepClone = cloneDeep(state)

state.user.loggedIn = false
console.log(stateClone)
console.log(stateDeepClone)
