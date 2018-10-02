import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MainPage from './Components/MainPage'
import Header from './Components/Header'
import './App.css'
import configureStore from './store'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div>
          <Header />
          <MainPage />
        </div>
      </Provider>
    )
  }
}

export default App
