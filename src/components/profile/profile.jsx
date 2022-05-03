import styles from './profile.module.css';
import MyPostsContainer from './myPosts/myPostsContainer';
import UserInfoContainer from './userInfo/userInfoConteiner';

const Profile = (props) => {
  return (
    <main className="content">
      <UserInfoContainer />
      <div className={styles.wrapper}>
      <MyPostsContainer />
      </div>
    </main>
  );
};

export default Profile;
