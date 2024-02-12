import styles from './Filter.module.css';
export const Filter = ({ value, onFilter }) => (
  <fieldset className={styles.filter}>
    <legend className={styles.legend}>Quickly find the right contact</legend>
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={value}
        onChange={onFilter}
      />
    </label>
  </fieldset>
);
