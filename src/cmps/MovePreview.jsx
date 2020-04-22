import React from 'react'

// function MovePreview(move) {
//     return (
//         <div>
//             {move.to}
//             {move.amount}
//             {move.at}
//         </div>
//     )
// }

// export default MovePreview


export default (props) => {
    return (
        <div>
            {props.title ? <h3><span className="text-light">To:</span> {props.move.to}</h3> : ''}
            <h3 className="flex">
                <span className="number flex">
                    <img className="bitcoin-currency" 
                         src={require('../assets/svg/bitcoin-logo.svg')} 
                         alt="B"/>{props.move.amount}
                </span> 
                <span className="text-light">|</span>
                {props.move.formatUSD}
            </h3>
            <h3 ><span className="text-light">At:</span> {props.move.at}</h3>
        </div>
    );

};
