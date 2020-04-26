import React from 'react'
import { Link } from 'react-router-dom';

function ContactPreview({ contact }) {
    return (
        <Link className="contact-preview flex a-center" to={'/contact/' + contact._id} key={contact._id}>
            <img
                className="avatar avatar-s"
                // onLoad={(e)=>{ e.target.src=`${require("../assets/svg/loading.svg")}`}}
                // (https?:\/\/)?([1-9]\d{0,3})\.website\.com\/.*type=abc.adv=abc1234 
                src={`http://robohash.org/${contact.name}.png`}
                // src={`https://robohash.org/${contact.name}.png`}
                onError={(e)=>{e.target.onerror = null; e.target.src=`${require("../assets/svg/user-profile.svg")}`}}
                // onError={(e)=>{e.target.onerror = null; e.target.src=`http://robohash.org/${contact.name}.png`}}
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

