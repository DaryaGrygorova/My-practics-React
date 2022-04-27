import styles from "./chat.module.css"
import Message from './message';

let MessData = [
  {message: 'Hello!',  name: '{props.name}', time: '15:20'},
  {message: 'It\'s my first private chat',  name: '{props.name}', time: '15:21'},
  {message: 'It\'s my first message!',  name: '{props.name}', time: '15:21'},
  {message: 'It\'s my first message!',  name: '{props.name}', time: '15:22'},
  {message: 'It\'s my first message!',  name: '{props.name}', time: '15:22'},
  {message: 'It\'s my first message!',  name: '{props.name}', time: '15:22'},
  {message: 'It\'s my first message!',  name: '{props.name}', time: '15:22'},
  {message: 'It\'s my first message!',  name: '{props.name}', time: '15:22'},
  {message: 'HaHaHa!!! I like it!!',  name: '{props.name}', time: '15:24'},
]



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
    <Message message={MessData[0].message}  name={props.name} time={MessData[0].time} />
    <Message message={MessData[1].message} name={props.name} time={MessData[1].time} />
    <Message message={MessData[2].message} name={props.name} time={MessData[2].time} />
    <Message message={MessData[3].message} name={props.name} time={MessData[3].time} />
    <Message message={MessData[4].message} name={props.name} time={MessData[4].time} />
    <Message message={MessData[5].message} name={props.name} time={MessData[5].time} />
    <Message message={MessData[6].message} name={props.name} time={MessData[6].time} />
    <Message message={MessData[7].message} name={props.name} time={MessData[7].time} />
    <Message message={MessData[8].message} name={props.name} time={MessData[8].time} />
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
