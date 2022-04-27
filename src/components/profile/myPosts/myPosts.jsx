import Post from './post';
import NewPost from './newPost';
import styles from './myPosts.module.css';

let PostsData = [
  {message: 'Hi, world!', likeCounter: '15'},
  {message: 'It\'s my first post', likeCounter: '5'},
  {message: 'How are you?', likeCounter: '7'},
]


const MyPosts = (props) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>My posts</h2>
      <NewPost />
      <ul>
        <li className={styles.item}>
          <Post message={PostsData[0].message} name={props.name} likeCounter={PostsData[0].likeCounter} />
        </li>
        <li className={styles.item} >
          <Post message={PostsData[1].message}  name={props.name} likeCounter={PostsData[0].likeCounter} />
        </li>
        <li className={styles.item}>
          <Post message={PostsData[2].message} name={props.name} likeCounter={PostsData[0].likeCounter} />
        </li>
      </ul>
    </div>
  );
};

export default MyPosts;
