import styles from './userInfo.module.css';

const UserInfo = (props) => {
  return (
    <div>
    <div className={styles.wrapper}>
    <img
        src="https://interier-foto.ru/wp-content/uploads/2014/11/severo-chujskij-hrebet6393.jpg"
        alt="banner"
        width="1200"
        height="300"
      />
    </div>
    <div className={styles.thumb}>
        <img
          src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
          className={styles.photo}
          alt="UserInfo"
          width="260"
          height="250"
        />
        <div className={styles.description}>
          <h1 className={styles.name}>{props.UserName}</h1>
          <p className={styles.about}>{props.UserAbout}</p>
        </div>
      </div>
</div>
  );
};

export default UserInfo;
