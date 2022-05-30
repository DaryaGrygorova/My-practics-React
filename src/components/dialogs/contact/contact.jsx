import React from 'react';
import styles from './contact.module.css';
import { NavLink } from 'react-router-dom';
import prettyLady from '../../images/prettyLady-icon.webp';

const Contact = React.memo(props => {
  return (
    <NavLink className={styles.wrapper} to={`/dialogs/${props.id}`}>
      <img className={styles.photo} src={prettyLady} alt="User" with="40" height="40" />
      <h2 className={styles.name}>{props.name}</h2>
    </NavLink>
  );
});

export default Contact;
