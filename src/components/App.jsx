import { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactsList from '../components/ContactsList/ContactsList';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const addContact = {
      id: nanoid(3),
      name: data.name,
      number: data.number,
    };
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === addContact.name.toLowerCase()
      )
    ) {
      return alert(`${addContact.name} is already in contacts!`);
    }
    this.setState(prevState => ({
      contacts: [addContact, ...prevState.contacts],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
