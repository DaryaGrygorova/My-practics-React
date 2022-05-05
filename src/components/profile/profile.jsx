import styles from './profile.module.css';
import UserInfo from './userInfo/userInfo';
import MyPosts from './myPosts/myPosts';
import { useParams } from 'react-router-dom';

const Profile = (props) => {
  let params = useParams();
  if (props.UserID !== params.userID ) {
    props.setUserID(params.userID);
    props.onPageChanged()};
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
