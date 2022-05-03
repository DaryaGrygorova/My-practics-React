import styles from "./chat.module.css"
import Message from '../message/message';
import { addMessActionCreator, addNewMessActionCreator } from '../../../Redux/Reducers/dialogs-reducer';

const Chat = (props) => {
  let MessElements = props.MessData.map ( Mess => <Message id={Mess.id} message={Mess.message} name={Mess.name} time={Mess.time}/> );


  let onChangeMessText = (event) => {
    let newText = event.target.value;
    props.dispatch(addNewMessActionCreator(newText));
  };

  let addMess = () => {
    props.dispatch(addMessActionCreator());
  };


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
              className={styles.input}
              name="new_message"
              rows="1"
              placeholder="Введите текст..."
              required
              value={props.newMessText}
              onChange={onChangeMessText}/>
        <button className="button" type="submit" onClick={addMess}>
          Send
        </button>
      </form>
    </div>
);
};

export default Chat;
