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
      toast.error(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    this.setState({ name: '', number: '' });
    toast.success(`Contact ${contact.name} added!`);
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
    toast.success(`Contact deleted!`);
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.findContacs();
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <PhonebookForm onSubmit={this.addContact} />
        <ContactsContainer>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactsFilter value={filter} onChange={this.changeFilter} />
          <ContactsList
            filteredContacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </ContactsContainer>
        <Toaster />
      </Wrapper>
    );
  }
}

export default App;
