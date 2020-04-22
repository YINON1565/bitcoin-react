import React from 'react'
import { Link } from 'react-router-dom';

function ContactPreview({ contact }) {
    return (
        <Link className="contact-preview flex a-center" to={'/contact/' + contact._id} key={contact._id}>
            <img
                className="avatar avatar-s"
                src={`https://robohash.org/${contact.name}.png`}
                alt=""
            />
            <ul className="flex col j-center">
                <li>{contact.name}</li>
                {/* <li>{contact.email}</li> */}
                <li>{contact.phone}</li>
            </ul>
        </Link>
    )
}

export default ContactPreview

