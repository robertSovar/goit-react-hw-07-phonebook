import styles from "../ContactList/ContactList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContacts,
  fetchContact,
  selectContacts,
} from "../../redux/slices/contactsSlice";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector((state) => state.contacts.error);
  const isLoading = useSelector((state) => state.contacts.isLoading);

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
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={handleDeleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
