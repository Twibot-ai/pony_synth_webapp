import React from 'react'
import ReactDOM from 'react-dom'
import MainContainer from 'components/main_component'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MainContainer />,
    document.getElementById('mount')
  )
});
