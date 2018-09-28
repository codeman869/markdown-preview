import React, { Component } from 'react'
import { Provider } from 'react-redux'

import './App.css'
import MarkupInput from './Components/MarkupInput'
import Preview from './Components/Preview'
import configureStore from './store'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div>
          <MarkupInput />
          <Preview />
        </div>
      </Provider>
    )
  }
}

export default App
