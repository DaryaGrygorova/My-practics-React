import MyPosts from "./myPosts/myPosts";
import User from "./user";


const Profile = (props) => {
  return (
    <main className="content">
      <User name={props.name} about={props.about}/>
      <MyPosts name={props.name} />
    </main>
  );
};

export default Profile;
