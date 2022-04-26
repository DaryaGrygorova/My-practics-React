import styles from "./chat.module.css"
import Message from './message';

const Chat = (props) => {
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
    <h2 className={styles.name}>{props.name}</h2>
  </div>
  <div className={styles.wrapper}>
      <Message message="Hello!"  name={props.name} likeCounter="5"/>
    <Message message="It's my first private chat" name={props.name} likeCounter="5"/>
    <Message message="It's my first private chat" name={props.name} likeCounter="5"/>
    <Message message="It's my first private chat" name={props.name} likeCounter="5"/>
    <Message message="It's my first private chat" name={props.name} likeCounter="5"/>
    <Message message="It's my first private chat" name={props.name} likeCounter="5"/>
    <Message message="It's my first private chat" name={props.name} likeCounter="5"/>
    <Message message="It's my first private chat" name={props.name} likeCounter="5"/>
    <Message message="It's my first private chat" name={props.name} likeCounter="5"/>
    <Message message="It's my first private chat" name={props.name} likeCounter="5"/>
      <Message message="Ii like it!"  name={props.name} likeCounter="5"/>
  </div>
      <form className={styles.thumb}>
            <textarea
              className={styles.input}
              name="new_message"
              rows="1"
              placeholder="Введите текст..."
              required>
            </textarea>
        <button className="button" type="submit">
          Send
        </button>
      </form>
    </div>
);
};

export default Chat;
