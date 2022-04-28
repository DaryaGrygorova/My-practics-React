import styles from "./message.module.css"

const Message = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <img
          className={styles.photo}
          src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
          alt="User"
          with="40"
          height="40"
        />
        <h2 className={styles.name}>{props.name}</h2>
      </div>
      <p className={styles.text}>{props.message}</p>
      <p className={styles.data}>{props.time}</p>
    </div>
);
};

export default Message;
