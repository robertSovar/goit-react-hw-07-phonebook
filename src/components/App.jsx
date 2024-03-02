// App.js
import React, { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import {
  saveContacts,
  selectContacts,
  addContact,
  deleteContact,
} from "../redux/slices/contactsSlice";
import { setFilter } from "../redux/slices/filterSlice";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import styles from "./App.module.css";

const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const formSubmit = (name, number) => {
    const noCapitalName = name.toLowerCase();
    const existingContact = contacts.some(
      (contact) => contact.name.toLowerCase() === noCapitalName
    );
    if (existingContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(contact));
  };

  const changeFilterInput = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const findContacts = () => {
    const lowercaseFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowercaseFilter)
    );
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <section className={styles.mainSection}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={formSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} changeFilterInput={changeFilterInput} />
      <ContactList
        contacts={findContacts()}
        deleteContact={handleDeleteContact}
      />
    </section>
  );
};

export default App;
