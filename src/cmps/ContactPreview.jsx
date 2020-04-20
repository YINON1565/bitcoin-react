import React from 'react'
import { Link } from 'react-router-dom';

function ContactPreview({ contact }) {
    return (
        <Link to={'/contact/' + contact._id} key={contact._id}>
            <img
                src={`https://robohash.org/${contact.name}.png`}
                alt=""
            />
            <ul className="contact-preview">
                <li>{contact.name}</li>
                <li>{contact.email}</li>
                <li>{contact.phone}</li>
            </ul>
        </Link>
    )
}

export default ContactPreview

