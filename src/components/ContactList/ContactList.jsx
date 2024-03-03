import styles from "../ContactList/ContactList.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, fetchContact } from "../../redux/operations";
import ContactItem from "../ContactItem/ContactItem";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector((state) => state.error);
  const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <ul className={styles.contactListSection}>
          {contacts && contacts.length > 0 ? (
            contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDeleteContact={handleDeleteContact}
              />
            ))
          ) : (
            <p>No contacts available.</p>
          )}
        </ul>
      )}
      {error && <p> An error has occured while fetching contacts</p>}
    </div>
  );
};

export default ContactList;
