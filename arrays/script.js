'use strict'

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
}

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
}

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
}

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
}

const accounts = [account1, account2, account3, account4]

// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `

    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance}€`
}

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}€`

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumOut.textContent = `${Math.abs(out)}€`

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumInterest.textContent = `${interest}€`
}

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
  })
}
createUsernames(accounts)

const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements)

  //display balance
  calcDisplayBalance(acc)

  //display summary
  calcDisplaySummary(acc)
}
//Event handler
let currentAccount
btnLogin.addEventListener('click', function (e) {
  e.preventDefault()

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  )
  console.log(currentAccount)

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`
    containerApp.style.opacity = 100

    //Clear input fields
    inputLoginUsername.value = ''
    inputLoginPin.value = ''
    inputLoginPin.blur()

    updateUI(currentAccount)
  }
})

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  )
  console.log(amount, receiverAccount)

  //clear input fields
  inputTransferAmount.value = ''
  inputTransferTo.value = ''

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount)
    receiverAccount.movements.push(amount)
    console.log('Transfer completed')

    //update ui
    updateUI(currentAccount)
  }
})

btnLoan.addEventListener('click', function (e) {
  e.preventDefault()
  const amount = Number(inputLoanAmount.value)
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount)
    updateUI(currentAccount)
  }
  inputLoanAmount.value = ''
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault()
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.usrname
    )
    //delete account
    accounts.splice(index, 1)

    //hide UI
    containerApp.style.opacity = 0
  }
  inputCloseUsername.value = inputClosePin.value = ''
})

//////
///////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
/*
let arr = ['a', 'b', 'c', 'd', 'e']

//SLICE
console.log(arr.slice(2))
console.log(arr.slice(2, 4))
console.log(arr.slice(-2))
console.log(arr.slice(1, -2))

//method to copy the array : use any
console.log(arr.slice())
console.log([...arr])

//SPLICE
console.log(arr.splice(-1))
console.log(1, 2)
console.log(arr)

//Reverse
arr = ['a', 'b', 'c', 'd', 'e']
const arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse())
console.log(arr2)

//CONCAT
const letters = arr.concat(arr2)
console.log(letters)
console.log([...arr, ...arr2])

//JOIN
console.log(letters.join(' - '))


const arr = [23, 11, 64]
console.log(arr[0])
console.log(arr.at(0))

//getting last element of the array
console.log(arr(arr.length - 1))
console.log(arr.slice(-1)[0])
console.log(arr.at(-1))


console.log('FOR OF LOOP ')
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`)
  } else {
    console.log(`Movement ${i + 1}: You withdew ${Math.abs(movement)}`)
  }
}
console.log('\n')
console.log('forEach method')
movements.forEach(function (mov, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`)
  } else {
    console.log(`Movement ${i + 1}: You withdew ${Math.abs(mov)}`)
  }
})


//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
])

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
})

//SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique)
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`)
})


//CODING CHALLENGE
const jData1 = [3, 5, 2, 12, 7]
const kData1 = [4, 1, 15, 8, 3]
let jNewData1 = jData1.splice(1)
console.log(jNewData1)
jNewData1 = jNewData1.splice(1, 2)
console.log(jNewData1)

const ages1 = jNewData1.concat(kData1)
ages1.forEach(function (age, i, ages1) {
  if (age > 3) {
    console.log(`Dog number ${i} is a adult and is ${age} years old`)
  } else {
    console.log(`Dog number ${i} is still a puppy and is ${age} years old`)
  }
})

const jData2 = [9, 16, 6, 8, 3]
const kData2 = [10, 5, 6, 1, 4]
let jNewData2 = jData2.splice(1)
console.log(jNewData2)
jNewData2 = jNewData2.splice(1, 2)
console.log(jNewData2)

const ages2 = jNewData2.concat(kData2)

ages2.forEach(function (age, i, ages2) {
  if (age > 3) {
    console.log(`Dog number ${i} is a adult and is ${age} years old`)
  } else {
    console.log(`Dog number ${i} is still a puppy and is ${age} years old`)
  }
})

//better way of writing the same functions
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogs.Julia.slice()
  dogsJuliaCorrected.splice(0, 1)
  dogsJuliaCorrected.splice(-2)

  const dogs = dogsJuliaCorrected.concat(dogsKate)
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i} is a adult and is ${dog} years old`)
    } else {
      console.log(`Dog number ${i} is still a puppy and is ${dog} years old`)
    }
  })
}
checkDogs(jNewData1, kData1)
checkDogs(jNewData2, kData2)

//Map

const eurToUsd = 1.1
const movementsUSD = movements.map(mov => mov * eurToUsd)
console.log(movements)
console.log(movementsUSD)

const movementsUSDfor = []
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd)
console.log(movementsUSDfor)

const movementsDescriptions = movements.map((mov, i) => {
  ;`Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
    mov
  )}`
})
console.log(movementsDescriptions)


//FILTER 
const deposits = movements.filter(function (mov) {
  return mov > 0
})
console.log('\n DEPOSITS')
console.log(movements)
console.log(deposits)
const depositsFor = []
for (const mov of movements) if (mov > 0) depositsFor.push(mov)
console.log(depositsFor)

const withdrawal = movements.filter(function (mov) {
  return mov < 0
})
console.log('\n WITHDRAWALS')
console.log(movements)
console.log(withdrawal)
const withdrawalFor = []
for (const mov of movements) if (mov < 0) withdrawalFor.push(mov)
console.log(withdrawalFor)


//REDUCE METHOD
console.log(movements)
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}; ${acc}`)
//   return acc + cur
// }, 0)
const balance = movements.reduce((acc, cur) => acc + cur, 0)
console.log(balance)

let sum = 0
for (const mov of movements) sum += mov
console.log(sum)

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc
  } else {
    return mov
  }
}, movements[0])
console.log(max)


//CODING CHALLENGE 2

const testData1 = [5, 2, 4, 1, 15, 8, 3]
const testData2 = [16, 6, 10, 5, 6, 1, 4]

const calcAvgHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
  console.log('Human ages are ', humanAges)

  const adultDogs = humanAges.filter(age => age >= 18)
  console.log('Adult dogs ages are ', adultDogs)

  //const avg = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length
  const avg = adultDogs.reduce((acc, age, i, arr) => acc + age / arr.length, 0)
  console.log('Average value is ', avg)
  return avg
}
console.log('Result of test data 1 ', calcAvgHumanAge(testData1))
console.log('\n')
console.log('Result of test data 2 ', calcAvgHumanAge(testData2))


const eurToUsd = 1.1
//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositsUSD)


//CODING CHALLENGE 3
const testData1 = [5, 2, 4, 1, 15, 8, 3]
const testData2 = [16, 6, 10, 5, 6, 1, 4]
const calcAvgHumanAge2 = ages => {
  const average = ages
    .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
  console.log(average)
}
calcAvgHumanAge2(testData1)
calcAvgHumanAge2(testData2)


// FIND METHOD
const firstWithdrawal = movements.find(mov => mov < 0)
console.log(firstWithdrawal)

console.log(accounts)
const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account)

console.log(movements)
//Equality
console.log(movements.includes(-130))
//condition
const anydeposits = movements.some(mov => mov > 1500)
console.log(anydeposits)


//FLAT
const arr = [[1, 2, 3], [4, 5, 6], 7, 8]
console.log(arr.flat())
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8]
console.log(arrDeep.flat(2))
*/

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0)
console.log(overalBalance)
