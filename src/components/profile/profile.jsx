import User from "./userInfo/userInfo";
import styles from './profile.module.css';
import MyPostsContainer from './myPosts/myPostsContainer';

const Profile = (props) => {
  let state= props.store.getState().ProfilePage
debugger;
  return (
    <main className="content">
      <User name={state.Users.userName}
            about={state.Users.about}/>
      <div className={styles.wrapper}>
      <MyPostsContainer store={props.store} />
      </div>
    </main>
  );
};

export default Profile;
