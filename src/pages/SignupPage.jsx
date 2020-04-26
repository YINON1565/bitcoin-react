import React, { Component } from 'react'
import { UserService } from '../services/UserService'


export default class SignupPage extends Component {
    state = { name: '' }
    componentDidMount() {
        window.scrollTo(0,0)
    }
    setName = (ev) => {
        this.setState({ name: ev.target.value })
    }
    signUp = async (event) => {
        // console.log(event.key);
        
        var user = await UserService.signUp(this.state.name)
        if (user) this.props.history.push('/')
    }
    handleKeyPress = (event) => {
        console.log('hi');
        
        if(event.key === 'Enter'){
          console.log('enter press here! ')
        }
      }
    render() {
        return (
            <div className="sign-up">
                <img className="bitcoin-img" src={require('../assets/svg/bitcoin.svg')} alt="" />
                {/* <img className="gif-img" src={require('../assets/gif/tenor1.gif')} alt="" /> */}

                <h2>Please enter your name</h2>
                <form>
                    <input value={this.state.name} required type="text" onChange={this.setName} placeholder="Your name.."/>
                    <button onClick={this.signUp} type="submit"  onKeyPress={this.handleKeyPress}>Sign-up</button>
                </form>
            </div>
        )
    }
}
