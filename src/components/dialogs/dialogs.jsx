import Contact from './contact';
import styles from "./dialogs.module.css"
import Chat from './chat';

const Dialogs = (props) => {
  return (
    <div className="content">
      <main className={styles.container}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>Dialogs</h1>
          <Contact name="Sara Connor" id='Connor' />
          <Contact name="Lisa Fahrenheit" id='Fahrenheit'/>
          <Contact name="Rose Friedman" id='Friedman'/>
          <Contact name="Frank Sinatra" id='Sinatra'/>
          <Contact name="John Silver" id='Silver'/>
          <Contact name="Tomas Fisher" id='Fisher'/>
          <Contact name="Lili Walker" id='Walker' />
        </div>
        <span className={styles.line}></span>
        <Chat name="Sara Connor"/>
      </main>
    </div>
  );
};

export default Dialogs;
