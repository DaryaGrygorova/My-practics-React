import Contact from './contact';
import styles from "./dialogs.module.css"
import Chat from './chat';

let DialogsData = [
  { name: 'Sara Connor', id: 'Connor'},
  { name: 'Lisa Fahrenheit', id: 'Fahrenheit'},
  { name: 'Rose Friedman', id: 'Friedman'},
  { name: 'Frank Sinatra', id: 'Sinatra'},
  { name: 'John Silver', id: 'Silver'},
  { name: 'Tomas Fisher', id: 'Fisher'},
  { name: 'Lili Walker', id: 'Walker'},
];


const Dialogs = (props) => {
  return (
    <div className="content">
      <main className={styles.container}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>Dialogs</h1>
          <Contact name={DialogsData[0].name} id={DialogsData[0].id} />
          <Contact name={DialogsData[1].name} id={DialogsData[1].id} />
          <Contact name={DialogsData[2].name} id={DialogsData[2].id} />
          <Contact name={DialogsData[3].name} id={DialogsData[3].id} />
          <Contact name={DialogsData[4].name} id={DialogsData[4].id} />
          <Contact name={DialogsData[5].name} id={DialogsData[5].id} />
          <Contact name={DialogsData[6].name} id={DialogsData[6].id} />
        </div>
        <span className={styles.line}></span>
        <Chat name={DialogsData[3].name}/>
      </main>
    </div>
  );
};

export default Dialogs;
