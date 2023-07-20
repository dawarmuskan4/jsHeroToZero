// // "use strict"; // strict mode activation -> It makes easier to avoid accidental errors

// // // let hasDriversLicense = false;
// // // const passTest = true;
// // // if(passTest) hasDriverLicense = true;
// // // if(hasDriversLicense) console.log('I can drive')

// // // const interface = 'audio'

// // //function declaration
// // function logger(){
// //   console.log("123");
// // }

// // //calling or running or invoking function
// // // logger()
// // // logger()

// // // function fruitProcessor(apples, oranges){
// // //   console.log( apples, oranges)
// // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
// // //   return juice
// // // }

// // // const appleJuice = fruitProcessor(5, 0)
// // // console.log(appleJuice)
// // // console.log(fruitProcessor(2, 3))

// // //challenge 1
// // const calcAverage = (score1, score2, score3) => {
// //   return (score1+score2+score3)/3;
// // }
// // const scoreDolphins = calcAverage(44,23,71)
// // const scoreKoalas = calcAverage(65,54,49)

// // function checkWinner(avgDolphins, avgKoalas){
// //   if(avgDolphins > 2*avgKoalas){
// //     console.log(`Dolphins win( ${avgDolphins} vs {avgKoalas})`)
// //   }else if(avgKoalas > 2*avgDolphins){
// //     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
// //   }else{
// //     console.log("No team wins")
// //   }
// // }
// // checkWinner(scoreDolphins, scoreKoalas)

// // const calcAge = function(birthYear){
// //   return 2037-birthYear;
// // }
// // const years = [1990, 1993, 1999, 2001]
// // const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2]),calcAge(years[3])]
// // console.log(ages)

// // //challenge 2

// // // function calcTip (bill){
// // //   const tip = bill> 50 && bill<=300 ? bill*0.15 : bill*0.2;
// // //   return tip;
// // // }

// // // const bills = [125, 555, 44]
// // // const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// // // const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]]
// // // console.log(tips)
// // // console.log(totals)

// // // arrays and objects
// // const jonasArray=[
// //   'Jonas',
// //   'Schmedtamann',
// //   2023-1991,
// //   'teacher',
// //   ['Micheal', 'Peter', 'Steven']
// // ]

// // const jonas ={
// //   firstName:"Jonas",
// //   lastName: 'Schmedtamann',
// //   birthYear: 1991,
// //   job: 'teacher',
// //   friends : ['Micheal', 'Peter', 'Steven'],
// //   hasDriversLicense: true,

// //   calcAge: function(birthYear){
// //     this.age = 2037-this.birthYear
// //     return this.age
// //   },
// //   getSummary: function(){
// //     return `${this.firstName} is a ${this.calcAge()}-years old  ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
// //   }
// // }

// //const interestedIn = prompt("What would you like to know? Choose between firstName, lastName, age, job and friends");

// // if(jonas[interestedIn]){
// // console.log(jonas[interestedIn])
// // } else{
// //   console.log('Wrong request. What would you like to know? Choose between firstName, lastName, age, job and friends')
// // }

// // //challenge
// // //write "Jonas has 3 friends, and his best friend is Micheal"
// // console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)

// // //challenge
// // //write "Jonas is a 46-year old teacher, and he has a driver's license"
// // console.log(jonas.getSummary())

// //challenge 3
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function(){
//     this.bmi = this.mass/(this.height*this.height);
//     return this.bmi
//   }
// }

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function(){
//     this.bmi = this.mass/(this.height*this.height);
//     return this.bmi
//   }
// }
// mark.calcBMI()
// john.calcBMI()
// mark.bmi > john.bmi ?
// console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`)
// :
// console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)

//challenge 3
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
function calcTip(bill) {
  const tip = bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
  return tip
}
for (i = 0; i < bills.length - 1; i++) {
  const tip = calcTip(bills[i])
  tips.push(tip)
  totals.push(bills[i] + tip)
}
console.log(tips)
console.log(bills)

const x = '23'
const age = birthYear => 2037 - birthYear
let y = p
console.log()
