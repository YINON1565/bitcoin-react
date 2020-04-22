import React from 'react'

import MovePreview from './MovePreview'

// function MovesList(moves) {
//     return (
//         <ul>{this.moves.map((move, index) => {
//             return (
//                 <li key={index} >
//                     <MovePreview move={move}/>
//                 </li>
//             )
//         })}</ul>
//     )
// }

// export default MovesList

export default (props) => {
  return (
    <div className="move-list">
      <h2 className="text-light title">Your Last {props.moves.length} {props.moves.length > 1?'Moves': 'Move'}:</h2>
      <div className="move-list-container">
        {props.moves.map((move, index) => (
          <li key={index} >
            <MovePreview title={props.title} move={move} />
          </li>
        ))}
      </div>
    </div>
  );
};
