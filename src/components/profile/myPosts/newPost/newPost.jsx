import styles from './newPost.module.css';

const NewPost = () => {
  return (
    <div>
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
    </div>
  );
};

export default NewPost;
