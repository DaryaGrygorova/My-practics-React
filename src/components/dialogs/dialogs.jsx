import Contact from './contact';
import styles from "./dialogs.module.css"
import Chat from './chat';

const Dialogs = (props) => {
  return (
    <div className="content">
      <main className={styles.container}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>Dialogs</h1>
          <Contact name="Sara Connor" urltext='Connor' />
          <Contact name="Lisa Fahrenheit" urltext='Fahrenheit'/>
          <Contact name="Rose Friedman" urltext='Friedman'/>
          <Contact name="Frank Sinatra" urltext='Sinatra'/>
          <Contact name="John Silver" urltext='Silver'/>
          <Contact name="Tomas Fisher" urltext='Fisher'/>
          <Contact name="Lili Walker" urltext='Walker' />
        </div>
        <span className={styles.line}></span>
        <Chat name="Sara Connor"/>
      </main>
    </div>
  );
};

export default Dialogs;
