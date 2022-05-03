import Contact from './contact/contact';
import styles from "./dialogs.module.css"
import ChatContainer from './chat/chatContainer';

const Dialogs = (props) => {
  let state= props.store.getState().MessagePage

  let ContactsElements = state.ContactsData.map ( OneContact => <Contact id={OneContact.id} name={OneContact.name} /> );
  return (
    <div className="content">
      <main className={styles.container}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>Dialogs</h1>
          { ContactsElements }
        </div>
        <span className={styles.line}></span>
        <div className={styles.wrapper}>
        <ChatContainer store={props.store} />
        </div>
      </main>
    </div>
  );
};

export default Dialogs;
