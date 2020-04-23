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
        return (
            <div className="contact-edit width-container flex a-center evenly">
                <div className="btn-side-container flex a-center bet">
                    <img onClick={this.onGoBack} src={require('../assets/svg/go-back.svg')} alt="↻" title="Go Back" />
                    {
                        (this.state.contact._id) ?
                        <img onClick={() => this.onRemoveContantHandler(this.state.contact._id)} src={require('../assets/svg/bin.svg')} alt="🗑" title="Delete Contant" />
                        : ''
                    }
                </div>
                <img
                    className="avatar avatar-l"
                    src={`https://robohash.org/${name}.png`}
                    alt=""
                />
                <div className="input-containet">
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
                </div>
            </div>
        )
    }
}
