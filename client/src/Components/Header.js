import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 style={{ textAlign: 'center' }}>Markdown Previewer</h1>
      </div>
    )
  }
}
