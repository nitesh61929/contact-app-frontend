import React from 'react';

const ContactRow = (props) => {
    return (
        <tr>
            <td>{props.contact.name}</td>
            <td>{props.contact.address}</td>
        </tr>
    )
}

export default ContactRow;