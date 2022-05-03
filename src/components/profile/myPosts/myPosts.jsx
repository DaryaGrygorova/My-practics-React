import Post from './post/post';
import styles from '../myPosts/myPost.module.css';

const MyPosts = (props) => {

let handleChange = (event) => {
  let newText = event.target.value;
  props.handleChange(newText);
};

let onClick = () => {
  props.onClick();
}

let Posts = props.PostsData.map ( PostItem => <Post id={PostItem.id} name={PostItem.name} message={PostItem.message} likeCounter={PostItem.likeCounter} time={PostItem.time}/> );

return (
    <div>
      <h2 className={styles.title}>My posts</h2>
      <form className={styles.thumb}>
        <textarea
          className={styles.input}
          name="new_post"
          rows="3"
          placeholder="Enter the text"
          required
          value={props.NewPostText}
          onChange={handleChange}
        />
        <button className={`${styles.button} button`}
          type="submit"
                onClick={onClick}>
          Send
        </button>
      </form>
      {Posts}
    </div>
  );
};

export default MyPosts;
