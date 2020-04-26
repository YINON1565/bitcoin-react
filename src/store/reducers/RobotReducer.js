const initialState = {
  robots: [],
  currRobot: null
}

export default function RobotReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ROBOTS':
      return { ...state, robots: action.robots }
    case 'SET_CURR_ROBOT':
      return { ...state, currRobot: action.robot }
    case 'UPDATE_ROBOT':
      return {
        ...state,
        robots: state.robots.map(robot => {
          if (robot._id === action.robot._id) return action.robot;
          return robot;
        })
      }
    case 'DELETE_ROBOT':
      return {
        ...state,
        robots: state.robots.filter(robot => {
          return robot._id !== action.id
        })
      }
    case 'ADD_ROBOT':
      debugger;
      return {
        ...state,
        robots: [...state.robots, action.robot]
      }
    default:
      return state;
  }
};