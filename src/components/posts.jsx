import styles from './posts.module.css';

const Posts = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>My posts</h2>
      <form className={styles.thumb}>
        <textarea
          className={styles.input}
          name="new_post"
          rows="3"
          placeholder="Введите текст..."
          required
        ></textarea>
        <button className={`${styles.button} button`} type="submit">
          Send
        </button>
      </form>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.description}>
            <img
              className={styles.photo}
              src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
              alt="User"
              with="40"
              height="40"
            />
            <div className={styles.about}>
              <h2 className={styles.name}>Jenny Docker</h2>
              <p className={styles.data}>Дата и время</p>
            </div>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dolorem cum expedita
            illum explicabo. In cum asperiores laudantium delectus, possimus ipsa deserunt
            repudiandae maxime suscipit animi. Quam velit aliquid veritatis!
          </p>
        </li>
        <li className={styles.item}>
          <div className={styles.description}>
            <img
              className={styles.photo}
              src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
              alt="User"
              with="40"
              height="40"
            />
            <div className={styles.about}>
              <h2 className={styles.name}>Jenny Docker</h2>
              <p className={styles.data}>Дата и время</p>
            </div>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dolorem cum expedita
            illum explicabo. In cum asperiores laudantium delectus, possimus ipsa deserunt
            repudiandae maxime suscipit animi. Quam velit aliquid veritatis!
          </p>
        </li>
        <li className={styles.item}>
          <div className={styles.description}>
            <img
              className={styles.photo}
              src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
              alt="User"
              with="40"
              height="40"
            />
            <div className={styles.about}>
              <h2 className={styles.name}>Jenny Docker</h2>
              <p className={styles.data}>Дата и время</p>
            </div>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dolorem cum expedita
            illum explicabo. In cum asperiores laudantium delectus, possimus ipsa deserunt
            repudiandae maxime suscipit animi. Quam velit aliquid veritatis!
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
