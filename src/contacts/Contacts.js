import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import API from '../common/APIUtils';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await API.getAll();
                setContacts(res.data);
            } catch (err) {
                alert(err);
            }
        };
        fetchData();
    }, []);

    return (
        <ContactList contacts={contacts} />
    )
}

export default Contacts;