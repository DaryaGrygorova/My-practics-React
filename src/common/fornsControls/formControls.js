import styles from './formControls.module.css';

export const MyTextarea = ({field, form: { touched, errors}, row, ...props}) => {
  return (
  <div className={styles.input__wrapper}>
    <textarea className={styles.input} row={row} {...field} {...props}></textarea>
    {touched[field.name] && errors[field.name] && <div className={styles.error}>{errors[field.name]}</div>}
  </div>
);}

