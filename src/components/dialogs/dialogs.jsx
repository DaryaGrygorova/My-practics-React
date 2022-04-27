import Contact from './contact';
import styles from "./dialogs.module.css"
import Chat from './chat';
import Post from '../profile/myPosts/post';

let ContactsData = [
  { name: 'Sara Connor', id: 'Connor'},
  { name: 'Lisa Fahrenheit', id: 'Fahrenheit'},
  { name: 'Rose Friedman', id: 'Friedman'},
  { name: 'Frank Sinatra', id: 'Sinatra'},
  { name: 'John Silver', id: 'Silver'},
  { name: 'Tomas Fisher', id: 'Fisher'},
  { name: 'Lili Walker', id: 'Walker'},
];

let ContactsElements = ContactsData.map ( OneContact => <Contact id={OneContact.id} name={OneContact.name} /> );


const Dialogs = (props) => {
  return (
    <div className="content">
      <main className={styles.container}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>Dialogs</h1>
          { ContactsElements }
        </div>
        <span className={styles.line}></span>
        <Chat name={ContactsData[3].name}/>
      </main>
    </div>
  );
};

export default Dialogs;
