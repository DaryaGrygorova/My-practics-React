import Contact from './contact/contact';
import styles from "./dialogs.module.css"
import Chat from './chat/chat';

const Dialogs = (props) => {
  let ContactsElements = props.States.ContactsData.map ( OneContact => <Contact id={OneContact.id} name={OneContact.name} /> );
  return (
    <div className="content">
      <main className={styles.container}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>Dialogs</h1>
          { ContactsElements }
        </div>
        <span className={styles.line}></span>
        <Chat MessData={props.States.MessData} addMess={props.addMess} newMessText={props.States.newMessText} updateNewMessText={props.updateNewMessText}/>
      </main>
    </div>
  );
};

export default Dialogs;
