import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateMarkup } from '../Actions/MarkupInputActions'

class MarkupInput extends Component {
  handleChange(e) {
    this.props.changeMarkup(e.target.value)
  }

  render() {
    return (
      <textarea
        id="editor"
        value={this.props.markupText}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}

MarkupInput.propTypes = {
  markupText: PropTypes.string,
  changeMarkup: PropTypes.func,
}

const mapStateToProps = state => {
  return { ...state.MarkupInputReducer }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMarkup: updatedText => dispatch(updateMarkup(updatedText)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkupInput)
