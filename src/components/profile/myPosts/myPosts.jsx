import Post from './post';
import NewPost from './newPost';
import styles from './myPosts.module.css';

const MyPosts = (props) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>My posts</h2>
      <NewPost />
      <ul className={styles.list}>
        <li className={styles.item}>
          <Post message="Hi, world!"  name={props.name} likeCounter="15"/>
        </li>
        <li className={styles.item} >
          <Post message="It's my first post"  name={props.name} likeCounter="5"/>
        </li>
        <li className={styles.item}>
          <Post message="How are you?" name={props.name} likeCounter="7"/>
        </li>
      </ul>
    </div>
  );
};

export default MyPosts;
