import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import MainContainer from 'components/main_component'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MainContainer />,
    document.getElementById('mount')
  )
});
