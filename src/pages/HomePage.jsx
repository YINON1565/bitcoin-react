import React, { Component } from 'react'
import { UserService } from '../services/UserService'
import { BitcoinService } from '../services/BitcoinService'

import MovesList from '../cmps/MovesList'

export default class HomePage extends Component {
    componentDidMount() {
        var user = UserService.getUser()
        if (!user) this.props.history.push('/signup')
        this.setState({ user: UserService.getUser(), rate: BitcoinService.getRate() })
    }
    state = { user: {}, rate: null }

    render() {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
          
        var moves = [];
        const { user, rate } = this.state
        if (user.moves) {
            moves = user.moves.splice(0,3)
            moves.map(move=> move.formatUSD = formatter.format(move.amount * (1 / rate)))
        } 
        

        return (
            <div className="home-page width-container">
                <div className="container-inside flex col j-center">
                    <h1>Hi, {user.name}</h1>
                    <section className="flex bet">
                        <section className="current-balance">
                            <h2 className="text-light title">Current balance</h2>
                            <h2 className="flex a-center">
                                bit: 
                                <img className="bitcoin-currency" src={require('../assets/svg/bitcoin-logo.svg')} alt="B" />
                                <span className="number">{user.coins}</span>
                            </h2>
                            <h2>USD: {formatter.format((user.coins * (1 / rate)).toFixed(2))}</h2>
                        </section>
                        <section className="current-btc">
                            <h2 className="text-light title">Current BTC USD</h2>
                            <p> {formatter.format((1 / rate).toFixed(2))}</p>
                        </section>
                    </section>
                    <section className="moves-container">
                        {moves && moves.length?  <MovesList title={true} moves={moves}/>: <h2 className="msg-no-action">No actions were taken into account</h2>}
                    </section>
                </div>
            </div>
        )
    }
}
