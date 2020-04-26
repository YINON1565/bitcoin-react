// inc: () => {
//   return (dispatch) => {
//     setTimeout(()=> {
//       dispatch({ type: 'INC' })
//     }, 2000)
//   }
// }

import { RobotService } from '../services/RobotService'

// LIST
export function loadRobots(filterBy) {
  return async dispatch => {
    const robots = await RobotService.getRobots(filterBy);
    dispatch({ type: 'SET_ROBOTS', robots })
  }
}

// READ
export function loadRobotById(id) {
  return async dispatch => {
    const robot = await RobotService.getRobotById(id);
    dispatch({ type: 'SET_CURR_ROBOT', robot })
  }
}

// UPDATE + CREATE
export function saveRobot(robot) {
  return async dispatch => {
    const isEdit = !!robot._id 
    robot = await RobotService.saveRobot(robot);

    if (isEdit) dispatch({ type: 'UPDATE_ROBOT', robot })
    else dispatch({ type: 'ADD_ROBOT', robot })
    return robot;
  }
}

// REMOVE

export function deleteRobot(id) {
  return async dispatch => {
    await RobotService.deleteRobot(id);
    dispatch({ type: 'DELETE_ROBOT', id })
  }
}
