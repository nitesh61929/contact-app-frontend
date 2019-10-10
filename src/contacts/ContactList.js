import React from 'react';
import ContactRow from './ContactRow';

const ContactList = (props) => {
    return (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map((item, index) => (
                    <ContactRow key={index} contact={item} />
                ))}

            </tbody>
        </table>
    )
}

export default ContactList;