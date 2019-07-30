'use strict'
import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Caio' />
        Aplicação
        <label htmlFor='input' id='input' >Input</label>
      </div>
    )
  }
})

export default App
