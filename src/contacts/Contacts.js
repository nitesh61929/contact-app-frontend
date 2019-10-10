import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';


const Contacts = () => {
    const [contacts, setContacts] = useState([]);



    useEffect(() => {
        const contactsArr = [
            {
                name: 'nitesh',
                address: 'nayabazar'
            },
            {
                name: 'ram',
                address: 'khusibun'
            }
        ]
        setContacts(contactsArr);
    }, []);



    return (
        <ContactList contacts={contacts} />
    )
}

export default Contacts;