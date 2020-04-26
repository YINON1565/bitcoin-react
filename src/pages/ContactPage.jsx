import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { ContactService } from '../services/ContactService'
import { UserService } from '../services/UserService'

import ContactList from '../cmps/ContactList'
import ContactFilter from '../cmps/ContactFilter'

export default class ContactPage extends Component {
    componentDidMount() {
        window.scrollTo(0,0)
        var user = UserService.getUser()
        if (!user) this.props.history.push('/signup')
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
            <div className="contact-page width-container">
                <ContactFilter
                    filterBy={this.state.filterBy}
                    onFilter={this.onFilterHandler}
                />
                <div className="width-container">
                <Link  to="/contact/edit">
                    <img className="add-contact-btn" src={require('../assets/svg/add-friend.svg')} alt="img"/>
                    {/* <button >Add new contact</button> */}
                </Link>
                </div>
                <ContactList contacts={contacts} />
            </div>
        )
    }
}
