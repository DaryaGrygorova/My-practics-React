import Post from './post/post';
import styles from '../myPosts/myPost.module.css';
import { Field, Form, Formik } from 'formik';
import React from 'react';

const MyPosts = (props) => {

let Posts = props.PostsData.map ( PostItem => <Post key={PostItem.id} id={PostItem.id} name={PostItem.name} message={PostItem.message} likeCounter={PostItem.likeCounter} time={PostItem.time}/> );

return (
    <div>
      <h2 className={styles.title}>My posts</h2>
      <AddPostForm NewPostText={props.NewPostText} onClick={props.onClick}/>
      {Posts}
    </div>
  );
};

const AddPostForm = (props) => {
  const AddPostFormSubmit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void}) => {
    setSubmitting(false);
    props.onClick(values.NewPostText)
  };

  return (
    <Formik
      initialValues={{ NewPostText: ''}}
      onSubmit={AddPostFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.thumb}>
          <Field type="text"
                 className={styles.input}
                 name="NewPostText"
                 placeholder="Enter the text..."
                 required
                 value={props.NewPostText} />
          <button type="submit"
                  disabled={isSubmitting}
                  className={`${styles.button} button`}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  )}


export default MyPosts;
