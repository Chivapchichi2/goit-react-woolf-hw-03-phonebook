import { Contact } from './Contact/Contact';
import styles from './ContactList.module.css';
export const ContactList = ({ contacts, onDelete }) => {
  let letter = '';
  const shouldWriteLetter = name => {
    if (name.charAt(0).toUpperCase() !== letter) {
      letter = name.charAt(0).toUpperCase();
      return true;
    }
    return false;
  };
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <div key={id}>
          {shouldWriteLetter(name) && (
            <p key={letter} className={styles.letter}>
              {letter}
            </p>
          )}
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </div>
      ))}
    </ul>
  );
};
