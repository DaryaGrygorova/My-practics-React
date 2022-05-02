import styles from './newPost.module.css';
import React from 'react';
import { addNewPostActionCreator, addPostActionCreator } from '../../../../Redux/State';

const NewPost = (props) => {

  let handleChange = (event) => {
    let newText = event.target.value;
    props.dispatch(addNewPostActionCreator(newText));
  };

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

 return (
    <div>
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
    </div>
  );
};

export default NewPost;
