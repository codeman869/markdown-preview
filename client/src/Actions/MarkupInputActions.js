export const updateMarkup = markupText => {
  return {
    type: 'UPDATE_MARKUP',
    payload: markupText,
  }
}
