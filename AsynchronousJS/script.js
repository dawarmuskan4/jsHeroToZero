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
  //countriesContainer.style.opacity = 1
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg)
  //countriesContainer.style.opacity = 1
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
*/

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
