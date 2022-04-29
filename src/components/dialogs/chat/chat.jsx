import styles from "./chat.module.css"
import Message from '../message/message';
import React from 'react';

const Chat = (props) => {
  let MessElements = props.MessData.map ( Mess => <Message id={Mess.id} message={Mess.message} name={Mess.name} time={Mess.time}/> );

  let newMessElement = React.createRef();
  let addMess = () => {
    let text = newMessElement.current.value;
    props.addMess(text);
  }

  return (
    <div className={styles.container}>
    <div className={styles.title}>
    <img
      className={styles.photo}
      src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
      alt="User"
      width="40"
      height="40"
    />
    <h2 className={styles.name}>ИМЯ ПОЛЬЗОВАТЕЛЯ</h2>
  </div>
  <div className={styles.wrapper}>
    { MessElements }
  </div>
      <form className={styles.thumb}>
            <textarea
              ref={newMessElement}
              className={styles.input}
              name="new_message"
              rows="1"
              placeholder="Введите текст..."
              required>
            </textarea>
        <button className="button" onClick={addMess}>
          Send
        </button>
      </form>
    </div>
);
};

export default Chat;
