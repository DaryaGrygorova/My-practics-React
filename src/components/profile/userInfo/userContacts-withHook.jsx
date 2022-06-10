import styles from './userInfo.module.css';
import React, { useState, setState } from 'react';

const UserContactsWithHook = props => {
  const [isContactsHidden, setContactsHidden] = useState(true);

  const showContacts = () => {
    setContactsHidden(false);
  };

  const hideContacts = () => {
    setContactsHidden(true);
    setState();
  };

  let userContactItems;
  if (props.Profile) {
    userContactItems = Object.keys(props.Profile.contacts).map(key => {
      return (
        <li key={key}>
          <b>{key}:</b> {props.Profile.contacts[key] ?? ' ---'}
        </li>
      );
    });
  }

  return (
    <div>
      {isContactsHidden ? (
        <div className={styles.userContacts}>
          <p className={styles.contactsListTitle} onClick={showContacts}>
            <b>Contacts...</b>
          </p>
        </div>
      ) : (
        <div className={styles.userContacts}>
          <p className={styles.contactsListTitle} onClick={hideContacts}>
            <b>Contacts...</b>
          </p>
          <ul className={styles.contactsList}>{userContactItems}</ul>
        </div>
      )}
    </div>
  );
};

export default UserContactsWithHook;
