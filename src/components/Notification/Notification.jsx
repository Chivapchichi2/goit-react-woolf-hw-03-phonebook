import styles from './Notification.module.css';
export const Notification = ({ message }) => (
  <p className={styles.notification}>{message}</p>
);
