'use strict'

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal')
const btnsOpenModal = document.querySelectorAll('.btn--show-modal')
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section-1')

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})

//Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect()
  console.log(e.target.getBoundingClientRect)
})

//Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault()
//     const id = this.getAttribute('href')
//     console.log(id)
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     })
//   })
// })

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault()

  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    console.log(id)
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    })
  }
})

//Tabbed components
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab')
  console.log(clicked)
  clicked.classList.add('.operations__tab--active')
})

/*Lectures

//Selecting ELements
console.log(document.documentElement)

const allSections = document.querySelectorAll('.section')
console.log(allSections)

document.getElementById('section--1')
const allButtons = doc   cument.getElementsByTagName('button')
console.log(allButtons)
console.log(document.getElementsByClassName('btn')) 

// Creating and inserting elements
const header = document.querySelector('.header')
const message = document.createElement('div')
message.classList.add('cookie-message')
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

// header.prepend(message);
header.append(message)
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message)
  })

//styles
message.style.backgroundColor = '#37383d'


//scrolling effect



const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor()
  console.log('LINK', e.target, e.currentTarget)
  //e.stopPropagation()
})
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor()
  console.log('LINK', e.target, e.currentTarget)
})
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor()
    console.log('LINK', e.target, e.currentTarget)
  },
  true
)
*/
