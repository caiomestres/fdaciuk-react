'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'John',
      lastName: 'Doe'
    }
  },

  render: function () {
    return (
      <h1>Olá {this.props.name + ' ' + this.props.lastName}</h1>
    )
  }
})

export default Title
