import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import initialContacts from './data/initialContacts.json';
import PhonebookForm from './components/phonebookForm';
import ContactsList from './components/contacts/contactsList';
import ContactsFilter from './components/contacts/contactsFilter';
import { Wrapper, Title, ContactsContainer, ContactsTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  compareNames = name => {
    const normalizeName = name.toLowerCase();
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizeName,
    );
  };

  addContact = contact => {
    if (this.compareNames(contact.name)) {
      toast.error(`${contact.name} is already in contacts`, {
        style: {
          border: '1px solid #E8301C',
          color: '#E8301C',
        },
      });
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    this.setState({ name: '', number: '' });
    toast.success(`Contact ${contact.name} added!`, {
      style: {
        border: '1px solid #49FF71',
      },
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  findContacs = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    toast.success(`Contact deleted!`, {
      style: {
        border: '1px solid #49FF71',
      },
    });
  };

  render() {
    const { filter } = this.state;

    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <PhonebookForm onSubmit={this.addContact} />
        <ContactsContainer>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactsFilter value={filter} onChange={this.changeFilter} />
          <ContactsList
            filteredContacts={this.findContacs()}
            deleteContact={this.deleteContact}
          />
        </ContactsContainer>
        <Toaster position="bottom-center" reverseOrder={false} />
      </Wrapper>
    );
  }
}

export default App;
