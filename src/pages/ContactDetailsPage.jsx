import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { ContactService } from '../services/ContactService'
import { UserService } from '../services/UserService';
import { BitcoinService } from '../services/BitcoinService'

import TransferFund from '../cmps/TransferFund';
import MovesList from '../cmps/MovesList';

export default class ContactDetailsPage extends Component {
    state = {
        contact: null,
        user: {},
         rate: null
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const contact = await ContactService.getContactById(id);
        this.setState({ contact, user: UserService.getUser(), rate: BitcoinService.getRate() });
    }

    onTransferCoins = (amount) => {
        console.log(amount, 'amount');
        const user = UserService.addMove(this.state.contact, amount)
        this.setState({ user })
    }

    render() {
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        const { contact, user, rate } = this.state
        if (!contact) {
            return <img src={require('../assets/svg/loading.svg')} alt="Loading" />
        }
        const moves = user.moves.filter(move => move.toId === this.state.contact._id)
        moves.map(move=> move.formatUSD = formatter.format(move.amount * (1 / rate)))


        return (
            <div className="contact-details width-container">
                <div className="contact-details-inside flex a-center evenly">
                    <div className="link-container flex a-center bet">
                        <Link to="/contact">
                            <img  src={require('../assets/svg/go-back.svg')} alt="↻" title="Go to list"/> 
                        </Link>
                        <Link to={'/contact/edit/' + contact._id}>
                            <img  src={require('../assets/svg/pen.svg')} alt="✏" title="Edit contact"/>
                        </Link>
                    </div>
                    <img
                        className="avatar avatar-l"
                        src={`https://robohash.org/${contact.name}.png`}
                        alt=""
                    />
                    <ul className="contact-details">
                        <li>{contact.name}</li>
                        <li>{contact.email}</li>
                        <li>{contact.phone}</li>
                    </ul>
                </div>
                <TransferFund contact={contact} maxCoins={user.coins} onTransferCoins={this.onTransferCoins} />
                {moves && moves.length ? <MovesList title={false} moves={moves} /> : <h3 className="msg-no-action">No actions were taken into account</h3>}

            </div>
        )
    }
}
