export const flex = (align) => {
  return {
    display: 'flex',
    alignItems: align,
    justifyContent: align,
  }
}

export const bgImage = (img) => {
  return {
    backgroundImage:`url(${img})`,
  }
}