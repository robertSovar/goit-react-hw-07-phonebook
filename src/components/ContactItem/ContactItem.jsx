import styles from "../ContactList/ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/operations";

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContacts(contact.id));
  };

  return (
    <div>
      <div className={styles.contactList}>
        {contact.name}: {contact.phone}
        <button onClick={onDeleteContact} className={styles.button}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactItem;
