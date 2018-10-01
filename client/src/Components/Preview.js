import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import marked from 'marked'
import Parser from 'html-react-parser'

class Preview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      html: '',
    }
  }

  newMarkup(text) {
    this.setState({
      html: marked(text),
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      return
    } else {
      this.newMarkup(this.props.markupText)
    }
  }

  render() {
    return <div id="preview">{Parser(this.state.html)}</div>
  }
}

Preview.propTypes = {
  html: PropTypes.string,
  markupText: PropTypes.string,
}

const mapStateToProps = state => {
  return { ...state.MarkupInputReducer }
}

export default connect(
  mapStateToProps,
  null
)(Preview)
