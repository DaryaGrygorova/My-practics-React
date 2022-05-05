import Post from './post/post';
import styles from '../myPosts/myPost.module.css';

const MyPosts = (props) => {

//   let handleChange = (event) => {
//   let newText = event.target.value;
//   props.handleChange(event.target.value);
// };
//
// let onClick = ;
// };

let Posts = props.PostsData.map ( PostItem => <Post key={PostItem.id} id={PostItem.id} name={PostItem.name} message={PostItem.message} likeCounter={PostItem.likeCounter} time={PostItem.time}/> );

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
          onChange={ (event)=> {props.handleChange(event.target.value)}}
        />
        <button className={`${styles.button} button`}
          type="submit"
                onClick={() => {props.onClick()}}>
          Send
        </button>
      </form>
      {Posts}
    </div>
  );
};

export default MyPosts;
