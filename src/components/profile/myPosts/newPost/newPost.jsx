import styles from './newPost.module.css';
import React from 'react';

const NewPost = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

 return (
    <div>
      <form className={styles.thumb}>
        <textarea
          ref={newPostElement}
          className={styles.input}
          name="new_post"
          rows="3"
          placeholder="Введите текст..."
          required
        ></textarea>
        <button className={`${styles.button} button`}
                type="submit"
                onClick={addPost}>
                Send
        </button>
      </form>
    </div>
  );
};

export default NewPost;
