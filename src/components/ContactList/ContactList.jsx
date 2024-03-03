import styles from "../ContactList/ContactList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContacts,
  fetchContact,
  selectContacts,
} from "../../redux/slices/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  // const error = useSelector((state) => state.contacts.error);
  // const isLoading = useSelector((state) => state.contacts.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <ul className={styles.contactListSection}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={styles.contactList}>
            <p>
              {contact.name}: {contact.phone}
            </p>
            <button
              type="button"
              onClick={() => handleDeleteContact(id)}
              className={styles.button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
