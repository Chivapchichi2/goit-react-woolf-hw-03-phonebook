import { eachFirstToUpperCase } from '../../../utils/utils';
import styles from './Contact.module.css';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      <span className={styles.span}>{eachFirstToUpperCase(name)}:</span>
      <span className={styles.span}> {number}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};
