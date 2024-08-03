import PropTypes from 'prop-types';

const ContactCard = ({ contact }) => {
  return (
    <div>
      <h2>
        {contact.first_name} {contact.last_name}
      </h2>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Tags:</strong> {contact.tags.join(', ')}
      </p>
    </div>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default ContactCard;