import styles from './profile.module.css';
import UserInfo from './userInfo/userInfo';
import MyPosts from './myPosts/myPosts';

const Profile = (props) => {
  return (
    <main className="content">
      <UserInfo Profile={props.Profile}/>
      <div className={styles.wrapper}>
      <MyPosts PostsData={props.PostsData} NewPostText={props.NewPostText}
               onClick={props.addPost} handleChange={props.addNewPost}/>
      </div>
    </main>
  );
};

export default Profile;
