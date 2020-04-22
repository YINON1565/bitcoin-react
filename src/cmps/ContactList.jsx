import React from 'react'
import ContactPreview from './ContactPreview'

function ContactList({ contacts }) {
    return (
        <ul className="contact-list">{contacts.map((contact, index) => {
            return (
                <li key={index} >
                    <ContactPreview contact={contact} index={index} />
                </li>
            )
        })}
        </ul>
    )
}

export default ContactList

