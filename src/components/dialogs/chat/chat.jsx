import styles from "./chat.module.css"
import Message from '../message/message';

let MessData = [
  {id: 1, message: 'Hello!',  name: 'Frank Sinatra', time: '15:20'},
  {id: 2, message: 'It\'s my first private chat',  name: 'Frank Sinatra', time: '15:21'},
  {id: 3, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:21'},
  {id: 4, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:22'},
  {id: 5, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:22'},
  {id: 6, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:22'},
  {id: 7, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:22'},
  {id: 8, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:22'},
  {id: 9, message: 'HaHaHa!!! I like it!!',  name: 'Frank Sinatra', time: '15:24'},
]

let MessElements = MessData.map ( Mess => <Message id={Mess.id} message={Mess.message} name={Mess.name} time={Mess.time}/> );


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
    { MessElements }
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
