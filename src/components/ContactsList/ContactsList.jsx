import { Button } from '../ContactsList/ContactsList.styled';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};
ContactsList.ppropTypes = {
  contacts: (PropTypes.shape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
