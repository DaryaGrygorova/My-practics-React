import Contact from './contact';
import styles from "./dialogs.module.css"
import Chat from './chat';

const Dialogs = (props) => {
  return (
    <div className="content">
      <main className={styles.container}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>Dialogs</h1>
          <Contact name="Sara Connor"/>
          <Contact name="Lisa Fahrenheit"/>
          <Contact name="Rose Friedman"/>
          <Contact name="Frank Sinatra"/>
          <Contact name="John Silver"/>
          <Contact name="Tomas Fisher"/>
          <Contact name="Lili Walker"/>
        </div>
        <span className={styles.line}></span>
        <Chat name="Sara Connor"/>
      </main>
    </div>
  );
};

export default Dialogs;
