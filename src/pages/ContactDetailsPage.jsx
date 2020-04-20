import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { ContactService } from '../services/ContactService'

export default class ContactDetailsPage extends Component {
    state = {
        contact: null,
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const contact = await ContactService.getContactById(id);
        this.setState({ contact });
    }

    

    render() {
        const { contact } = this.state
        if (!contact) {
            return <img src="../assets/svg/loading.svg" alt="Loading" />
        }

        return (
            <div>
                <Link to="/contact">
                    <button >Go to list</button>
                </Link>
                <Link to={'/contact/edit/' + contact._id}>
                    <button >Edit contact</button>
                </Link>
                <img
                    src={`https://robohash.org/${contact.name}.png`}
                    alt=""
                />
                <ul className="contact-details">
                    <li>{contact.name}</li>
                    <li>{contact.email}</li>
                    <li>{contact.phone}</li>
                </ul>
            </div>
        )
    }
}
