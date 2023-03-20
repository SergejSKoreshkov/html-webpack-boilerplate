// Test import of a JavaScript module
// import { example } from '@/js/example'

// Test import of an asset
import logo from '@/images/logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
const logoEl = document.querySelector('#img-main')
logoEl.src = logo

// const heading = document.createElement('h1')
// heading.textContent = example()

// // Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// // Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)

const domain = window.location.host
const domainEl = document.querySelector('#domain')
domainEl.innerHTML = 'Buy this domain -> ' + domain

