import React, { Component } from 'react'

export default class TransferFund extends Component {
    componentDidMount() {
        this.setState({ contact: this.props.contact, maxCoins: this.props.maxCoins })
    }
    state = { contact: {}, maxCoins: null, amount: 0 }
    setAmount = (ev) => {
        if (ev.target.value >= this.maxCoins){
            console.log(`${this.maxCoins} is the maximum you can afford`)
            return
        } 
        this.setState({ amount: ev.target.value })
    }
    render() {
        const { contact, maxCoins } = this.state
        return (
            <div className="transfer-fund">
                <div>
                    <h2 className="text-light">Transfer coin to <span>{contact.name}</span>:</h2>
                    <div className="flex col">
                        <input type="number" value={this.state.amount} onChange={this.setAmount} min="0" max={maxCoins} />
                        <button className="btn-send flex bet a-center" onClick={() => {
                            this.props.onTransferCoins(this.state.amount)
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
