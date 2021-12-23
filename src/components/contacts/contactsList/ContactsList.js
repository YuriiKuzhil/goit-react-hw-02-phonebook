import ContactsItem from './contactsItem';
const ContactsList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(({ name, id, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          onClick={() => deleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
