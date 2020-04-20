import React, { Component } from 'react'
import { ContactService } from '../services/ContactService'

import ContactList from '../cmps/ContactList'
import ContactFilter from '../cmps/ContactFilter'

export default class ContactPage extends Component {
    async componentDidMount() {
        this.loadContacts();
    }
    loadContacts = async () => {
        const contacts = await ContactService.getContacts(this.state.filterBy);
        this.setState({ contacts: contacts });
    };
    state = {
        contacts: [],
        filterBy: {
            term: '',
        },
    }
    onFilterHandler = (filterBy) => {
        this.setState((prevState) => {
            return {
                filterBy: {
                    ...prevState.filterBy,
                    ...filterBy,
                },
            };
        }, this.loadContacts);
    };
    render() {
        const { contacts } = this.state
        return (
            <div>
                <ContactFilter
                    filterBy={this.state.filterBy}
                    onFilter={this.onFilterHandler}
                />
                <ContactList contacts={contacts} />
            </div>
        )
    }
}
