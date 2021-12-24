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

export default ContactsList;
