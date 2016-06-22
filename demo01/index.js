import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'

const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Counter

    />, rootEl
  )
}

render();