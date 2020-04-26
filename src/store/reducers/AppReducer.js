const initialState = {
  msg: 'hello world',
  counter: 17
}

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'SET_MSG':
      return {
        ...state,
        msg: state.msg
        // counter: state.counter + 1
      }
    default:
      return state;
  }
}