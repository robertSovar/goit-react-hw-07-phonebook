// App.js
import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, addContacts } from "../redux/slices/contactsSlice";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import styles from "./App.module.css";

const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const formSubmit = (name, phone) => {
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
      phone,
    };

    dispatch(addContacts(contact));
  };

  return (
    <section className={styles.mainSection}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={formSubmit} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
};

export default App;
