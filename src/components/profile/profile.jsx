import MyPosts from "./myPosts/myPosts";
import User from "./userInfo/userInfo";
import NewPost from './myPosts/newPost/newPost';
import styles from './profile.module.css';


const Profile = (props) => {
  let MyPostsElements = props.States.PostsData.map ( PostItem => <MyPosts id={PostItem.id} name={PostItem.name} message={PostItem.message} likeCounter={PostItem.likeCounter} time={PostItem.time}/> );
  return (
    <main className="content">
      <User name={props.States.Users[0].userName} about={props.States.Users[0].about}/>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>My posts</h2>
        <NewPost addPost={props.addPost}/>
        { MyPostsElements }
      </div>
    </main>
  );
};

export default Profile;
