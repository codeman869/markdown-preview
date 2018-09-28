import React, { Component } from 'react'
import { Provider } from 'react-redux'

import './App.css'
import MarkupInput from './Components/MarkupInput'
import configureStore from './store'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <MarkupInput />
      </Provider>
    )
  }
}

export default App
