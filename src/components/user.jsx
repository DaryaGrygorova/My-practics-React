import styles from './user.module.css'

const User = () => {
  return (
    <div>
    <div className={styles.wrapper}>
    <img className={styles.banner}
        src="https://interier-foto.ru/wp-content/uploads/2014/11/severo-chujskij-hrebet6393.jpg"
        alt="banner"
        with="1200"
        height="300"
      />
    </div>
    <div className={styles.thunb}>
        <img
          src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
          className={styles.photo}
          alt="User"
          with="260"
          height="250"
        />
        <div className={styles.description}>
          <h2 className={styles.name}>Jenny Docker</h2>
          <p className={styles.about}>Pretty ukrainian lady</p>
        </div>
      </div>
</div>
  );
};

export default User;
