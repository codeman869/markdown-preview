/*eslint-env browser */
import React, { Component } from 'react'
import MarkupInput from './MarkupInput'
import Preview from './Preview'

const defaultStyle = {
  display: 'grid',
  gridTemplateRows: '1fr 1fr',
  gridRowGap: '2px',
}

export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStyle: defaultStyle,
      screenWidth: window.innerWidth,
    }
  }

  updateStyles() {
    let currentSize = window.innerWidth
    if (currentSize <= 1000) {
      this.setState({
        currentStyle: {
          display: 'grid',
          gridTemplateRows: '1fr 1fr',
          gridRowGap: '2px',
        },
        currentSize,
      })
    } else {
      this.setState({
        currentStyle: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridColumnGap: '10px',
        },
        currentSize,
      })
    }
  }

  componentDidMount() {
    this.updateStyles()
    window.addEventListener('resize', this.updateStyles.bind(this))

    window.addEventListener('orientationchange', this.updateStyles.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateStyles.bind(this))

    window.removeEventListener(
      'orientationchange',
      this.updateStyles.bind(this)
    )
  }

  render() {
    return (
      <div style={this.state.currentStyle}>
        <MarkupInput />
        <Preview />
      </div>
    )
  }
}
