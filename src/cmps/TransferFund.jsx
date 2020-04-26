import React, { Component } from 'react'

export default class TransferFund extends Component {
    state = { contact: {}, maxCoins: null, amount: 0 }
    componentDidMount() {
        this.setState({ contact: this.props.contact, maxCoins: this.props.maxCoins, amount: 0 })
        document.addEventListener("keydown", this.handlePress)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handlePress)
    }
    handlePress = (event) => {
        if (event.keyCode === 13 || event.keyCode === 32) {
            this.props.onTransferCoins(this.state.amount)
        }
        if (event.keyCode === 27) {
            this.setState({ amount: 0 })
        }
    }
    setAmount = (ev) => {
        var amount = ev.target.value
        if (amount >= this.maxCoins) {
            console.log(`${this.maxCoins} is the maximum you can afford`)
            return
        }
        this.setState({ amount })
    }
    render() {
        const { contact, maxCoins, amount } = this.state
        console.log(amount, 'amount in render');
        
        return (
            <div className="transfer-fund">
                <div>
                    <h2 className="text-light">Transfer coin to <span>{contact.name}</span>:</h2>
                    <div className="flex col">
                        <input type="number" value={amount} onChange={this.setAmount} min="0" max={maxCoins} required />
                        <button className="btn-send flex bet a-center" onClick={() => {
                            this.props.onTransferCoins(amount)
                            this.setState({ amount: 0 })
                        }}
                        >
                            Send
                            <img className="send-svg btn-img" src={require('../assets/svg/send.svg')} alt="✏" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
