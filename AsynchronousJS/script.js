'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

///////////////////////////////////////

//old school way

const renderCountry = function (data, className = '') {
  const languages = data.languages
  const currencies = data.currencies
  let lang = Object.values(languages)
  let curr = Object.values(currencies)

  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${[...lang]}</p>
        <p class="country__row"><span>💰</span>${curr[0].name}</p>
      </div>
    </article>
  `

  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
  countriesContainer.style.opacity = 1
}

/*
const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest()
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
  request.send()

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText)
    //console.log(data)

    //Render country 1
    renderCountry(data)

    //get neighbour country(2)
    const neighbour = data.borders?.[0]
    if (!neighbour) return

    //AJAX call country 1
    const request2 = new XMLHttpRequest()
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`)
    request2.send()

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText)
      //console.log(data2)
      renderCountry(data2, 'neighbour')
    })
  })
}
getCountryAndNeighbour('india')
getCountryAndNeighbour('japan')


const req = fetch(`https://restcountries.com/v3.1/name/india`)
console.log(req)

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response)
//       return response.json()
//     })
//     .then(function (data) {
//       console.log(data)
//       renderCountry(data[0])
//     })
// }

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`)
    response.json()
  })
}

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`)
//       response.json()
//     })
//     .then(data => {
//       renderCountry(data[0])
//       const neighbour = data[0].borders[0]

//       if (!neighbour) return

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => renderError('Something went wrong ', err.message))
//     .finally(() => {
//       countriesContainer.style.opacity = 1
//     })
// }

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0])
      const neighbour = data[0].borders[0]

      if (!neighbour) throw new Error('No neighbour found')

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      )
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err}`)
      renderError(`Something went wrong ${err.message}`, err.message)
    })
    .finally(() => {
      countriesContainer.style.opacity = 1
    })
}

btn.addEventListener('click', function () {
  getCountryData('australia')
})

/////////////////////////
//CODING CHALLENGE #1
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
      return res.json()
    })
    .then(data => {
      console.log(data)
      console.log(`You are in ${data.city}, ${data.country}`)

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`)

      return response.json()
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => console.error(`${err.message}`))
}
whereAmI(52.508, 13.381)
// whereAmI(19.037, 72.873)
// whereAmI(-33.933, 18.474)

console.log('test start') // 1
setTimeout(() => console.log('0 sec timer'), 0) //4
Promise.resolve('Resolved promsie 1').then(res => console.log(res)) //3
console.log('Test end') //2

console.log('test start') // 1
setTimeout(() => console.log('0 sec timer'), 0) //4
Promise.resolve('Resolved promise 1').then(res => console.log(res)) //3
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res)
})
console.log('Test end') //2


const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happening')
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('YOU WIN')
    } else {
      reject(new Error('You lost your money'))
    }
  }, 2000)
})
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))

//promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000)
  })
}
wait(2)
  .then(() => {
    console.log('I waited for 2 seconds')
    return wait(1)
  })
  .then(() => console.log('I waited for 1 second'))

*/
console.log('Getting position')
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // )
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}
getPosition().then(pos => console.log(pos))
// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`)
//       return res.json()
//     })
//     .then(data => {
//       console.log(data)
//       console.log(`You are in ${data.city}, ${data.country}`)

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`)

//       return response.json()
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => console.error(`${err.message}`))
// }
// btn.addEventListener('click', whereAmI)

const whereAmI = async function (country) {
  // const pos = await getPosition()
  // const { latitude: lat, longitude: lng } = pos.coords
  // const geo = await fetch(
  //   `https://geocode.xyz/${lat},${lng}?geoit=xml&auth=14607661605899704367x710`
  // )
  // const datageo = await geo.json()
  // console.log(datageo)

  //fetch(`https://restcountries.com/v3.1/name/${country}`)
  //.then(res => console.log(res))

  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
  console.log(res)
  const data = await res.json()
  console.log(data)
  renderCountry(data[0])
}
whereAmI('india')
console.log('first')
