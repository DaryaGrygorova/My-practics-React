import React from 'react';
import styles from './message.module.css';
import prettyLady from '../../images/prettyLady-icon.webp';

const Message = React.memo(props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <img className={styles.photo} src={prettyLady} alt="User" width="40" height="40" />
        <h2 className={styles.name}>{props.name}</h2>
      </div>
      <p className={styles.text}>{props.message}</p>
      <p className={styles.data}>{props.time}</p>
    </div>
  );
});

export default Message;
