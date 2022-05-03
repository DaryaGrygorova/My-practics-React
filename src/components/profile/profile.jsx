import MyPosts from "./myPosts/myPosts";
import User from "./userInfo/userInfo";
import styles from './profile.module.css';

const Profile = (props) => {
  return (
    <main className="content">
      <User name={props.States.Users[0].userName} about={props.States.Users[0].about}/>
      <div className={styles.wrapper}>
      <MyPosts dispatch={props.dispatch} PostsData={props.States.PostsData} NewPostText={props.States.NewPostText} />
      </div>
    </main>
  );
};

export default Profile;
