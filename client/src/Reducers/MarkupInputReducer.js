const defaultState = {
  markupText: '###Enter Text Here to be Displayed Below',
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_MARKUP':
      return { ...state, markupText: action.payload }
    default:
      return state
  }
}
