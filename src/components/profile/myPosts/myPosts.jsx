import Post from './post/post';
import styles from '../myPosts/myPost.module.css';
import { addNewPostActionCreator, addPostActionCreator } from '../../../Redux/Reducers/profile-reducer';

const MyPosts = (props) => {

let handleChange = (event) => {
  let newText = event.target.value;
  props.dispatch(addNewPostActionCreator(newText));
};

let addPost = () => {
  props.dispatch(addPostActionCreator());
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
          value = {props.newPostText}
          onChange={handleChange}
        />
        <button className={`${styles.button} button`}
          // type="submit"
                onClick={addPost}>
          Send
        </button>
      </form>



      {/*<NewPost newPostText={props.NewPostText}*/}
      {/*         dispatch={props.dispatch}/>*/}
      {Posts}
    </div>
  );
};

export default MyPosts;
