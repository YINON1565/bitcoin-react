import React, { Component } from 'react'
import { UserService } from '../services/UserService'


export default class SignupPage extends Component {
    state = { name: '' }
    setName = (ev) => {
        this.setState({ name: ev.target.value })
    }
    render() {
        return (
            <div className="sign-up">
                <img className="bitcoin-img" src={require('../assets/svg/bitcoin.svg')} alt="" />
                {/* <img className="gif-img" src={require('../assets/gif/tenor1.gif')} alt="" /> */}

                <h2>Please enter your name</h2>
                <input value={this.state.name} type="text" onChange={this.setName} placeholder="Your name.."/>
                <button onClick={() => {
                    UserService.signUp(this.state.name)
                }}>Sign-up</button>
            </div>
        )
    }
}
