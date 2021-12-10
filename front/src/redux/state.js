// state

// const initialState = [] // если в стейте лежит что-то одно, то делаем только один редьюсер и сразу его передаем в стор

export const initialState = {
  user: { // slice
    value: null,
    error: null,
  },
  validation: {
    error: null,
    value: false,
    number: null
  }
}