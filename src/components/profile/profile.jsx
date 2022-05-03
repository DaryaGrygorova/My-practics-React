import User from "./userInfo/userInfo";
import styles from './profile.module.css';
import MyPostsContainer from './myPosts/myPostsContainer';

const Profile = (props) => {
  return (
    <main className="content">
      <User name={props.States.Users[0].userName} about={props.States.Users[0].about}/>
      <div className={styles.wrapper}>
      <MyPostsContainer dispatch={props.dispatch} PostsData={props.States.PostsData} NewPostText={props.States.NewPostText} />
      </div>
    </main>
  );
};

export default Profile;
