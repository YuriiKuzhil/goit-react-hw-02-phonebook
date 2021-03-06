import PropTypes from 'prop-types';
import ContactsItem from './contactsItem';
import { List, Message } from './ContactsList.styled';
const ContactsList = ({ filteredContacts, deleteContact }) => {
  return (
    <List>
      {filteredContacts.length === 0 ? (
        <Message>😔 Sorry! No contacts</Message>
      ) : (
        filteredContacts.map(({ name, id, number }) => (
          <ContactsItem
            key={id}
            name={name}
            number={number}
            onClick={() => deleteContact(id)}
          />
        ))
      )}
    </List>
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};
export default ContactsList;
