import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { filteredContacts } from "../../redux/contactsOps";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/selectors";

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(filteredContacts);

  return (
    <ul className={css.contactList}>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactItem}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
