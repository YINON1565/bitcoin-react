import React, { Component } from 'react'
import { ContactService } from '../services/ContactService'

import Input from '../cmps/Input'

export default class ContactEditPage extends Component {
    state = { contact: { name: '', email: '', phone: '' } }

    async componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            const contact = await ContactService.getContactById(id);
            this.setState({ contact });
        }
    }

    onInputHandler = (value) => {
        this.setState((prevState) => {
            return {
                contact: {
                    ...prevState.contact,
                    ...value,
                },
            };
        });
    };

    saveContact = async _ => {
        const contact = await ContactService.saveContact(this.state.contact)
        console.log(contact, 'added/updated contact')
        this.props.history.push('/contact');
    }

    onRemoveContantHandler = async (id) => {
        const contacts = await ContactService.removeContact(id)
        this.props.history.push('/contact');
    }

    onGoBack = () => {
        this.props.history.go(-1)
    }
    render() {
        const { name, email, phone } = this.state.contact;
        const btnDelete = (this.state.contact._id) ? <button onClick={() => this.onRemoveContantHandler(this.state.contact._id)}>Delete Contant</button> : '';
        return (
            <div>
                {btnDelete}
                <button onClick={this.onGoBack}>Go Back</button>
                <img
                    src={`https://robohash.org/${name}.png`}
                    alt=""
                />
                <Input
                    value={name}
                    name="name"
                    onInput={this.onInputHandler}
                />
                <Input
                    value={email}
                    name="email"
                    onInput={this.onInputHandler}
                />
                <Input
                    value={phone}
                    name="phone"
                    onInput={this.onInputHandler}
                />
                <button onClick={this.saveContact}>Save</button>
                {/* </form> */}
            </div>
        )
    }
}
