import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getContacts } from '../api/api';
import ContactCard from './ContactCard';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await getContacts();
        console.log('API response:', data);
        
        if (data && data.resources && Array.isArray(data.resources)) {
          setContacts(data.resources);
        } else {
          console.error('Unexpected data structure:', data);
          setError('Unexpected data structure received');
        }
      } catch (err) {
        console.error('Error fetching contacts:', err);
        setError(`Failed to fetch contacts: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (contacts.length === 0) {
    return <div>No contacts available.</div>;
  }

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>
              <ContactCard contact={contact} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;