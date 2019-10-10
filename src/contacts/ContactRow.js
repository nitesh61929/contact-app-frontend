import React from 'react';

const ContactRow = (props) => {
    return (
        <tr>
            <td>{props.contact.title}</td>
            <td>{props.contact.completed}</td>
        </tr>
    )
}

export default ContactRow;