import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from './data/initialContacts.json';
class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
    name: '',
    number: '',
  };

  addName = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = e => {
    console.log(this.state.name);
    e.preventDefault();
    const contact = {
      id: nanoid(5),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    this.setState({ name: '', number: '' });
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
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.addContact}>
          <input
            onChange={this.addName}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            onChange={this.addName}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Додати</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <label>
            <input type="text" value={filter} onChange={this.changeFilter} />
            Find contacts by name
          </label>
          <ul>
            {this.findContacs().map(({ name, id, number }) => (
              <li key={id}>
                <span>{name}</span>
                <span>{number}</span>
                <button type="button" onClick={() => this.deleteContact(id)}>
                  Видалити
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
