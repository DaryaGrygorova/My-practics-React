import Post from './post/post';
import NewPost from './newPost/newPost';
import styles from './myPosts.module.css';

let PostsData = [
  {id: 1, name: 'Sara Connor', message: 'Hi, world!', time: '14:48', likeCounter: 15},
  {id: 2, name: 'Sara Connor', message: 'It\'s my first post', time: '14:55', likeCounter: 5},
  {id: 3, name: 'Sara Connor', message: 'How are you?', time: '14:58', likeCounter: 7},
]
let PostsElements = PostsData.map ( OnePost => <Post id={OnePost.id} name={OnePost.name} message={OnePost.message} likeCounter={OnePost.likeCounter} time={OnePost.time}/> );

const MyPosts = (props) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>My posts</h2>
      <NewPost />
      { PostsElements }
    </div>
  );
};

export default MyPosts;
