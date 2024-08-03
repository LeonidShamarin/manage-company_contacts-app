import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getContact } from '../api/api';

const Contact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      const data = await getContact(id);
      setContact(data);
      setLoading(false);
    };
    fetchContact();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Contact</h1>
      <p>
        <strong>Name:</strong> {contact.first_name} {contact.last_name}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Tags:</strong> {contact.tags.join(', ')}
      </p>
    </div>
  );
};

export default Contact;