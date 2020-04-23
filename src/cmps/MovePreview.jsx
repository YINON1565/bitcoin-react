import React from 'react'
import { Link } from 'react-router-dom';

import Moment from 'react-moment';
import 'moment-timezone';

export default (props) => {
    return (
        <div>
           {props.title ? <h3><span className="text-light">To:</span> <Link to={'/contact/' + props.move.toId} key={props.move.toId}> {props.move.to}</Link></h3> : ''}
            {/* {props.title ? <h3><span className="text-light">To:</span> {props.move.to}</h3> : ''} */}
            <h3 className="flex">
                <span className="number flex">
                    <img className="bitcoin-currency" 
                         src={require('../assets/svg/bitcoin-logo.svg')} 
                         alt="B"/>{props.move.amount}
                </span> 
                <span className="text-light">|</span>
                {props.move.formatUSD}
            </h3>
            <h3 ><span className="text-light">At:</span> <Moment fromNow>{props.move.at}</Moment></h3>
        </div>
    );

};
