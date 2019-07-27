'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
// import { render } from 'react-dom'
//export nomeado
import Title from './app'

// render(
ReactDOM.render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')

)

