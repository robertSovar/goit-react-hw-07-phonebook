import PropTypes from "prop-types";
import styles from "../ContactForm/ContactForm.module.css";
import { useState } from "react";

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <input
        className={styles.input}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};
ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};
export default ContactForm;
