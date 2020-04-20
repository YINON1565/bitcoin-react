import React, { Component } from 'react'
import { UserService } from '../services/UserService'
import { BitcoinService } from '../services/BitcoinService'
export default class HomePage extends Component {
    componentDidMount() {
        this.setState({ user: UserService.getUser(), rate: BitcoinService.getRate() })
    }
    state = { user: {}, rate: null }

    render() {
        const { user, rate } = this.state
        return (
            <div>
                <h3>Name: {user.name}</h3>
                <h3>Coins: {user.coins}</h3>
                <ul>{user.moves && user.moves.map((move, index) => {
                    return (
                        <li key={index} >
                            {move}
                            {/* <MovePreview move={move} index={index} movesUpdated={this.movesUpdated}/> */}
                        </li>
                    )
                })}</ul>
                <h5>Current Bitcoin rate: {rate} </h5>
            </div>
        )
    }
}
