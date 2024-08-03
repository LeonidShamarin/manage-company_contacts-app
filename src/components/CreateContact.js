import { useState } from 'react';
import { createContact } from '../api/api';

const CreateContact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      tags: tags.split(','),
    };
    await createContact(data);
  };

  return (
    <div>
      <h1>Create Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Tags:
          <input type="text" value={tags} onChange={(event) => setTags(event.target.value)} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateContact;