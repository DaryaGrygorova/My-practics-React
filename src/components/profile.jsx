import Posts from "./posts";
import User from "./user";


const Profile = () => {
  return (
    <main className="profile content">
      <User />
      <Posts />
    </main>
  );
};

export default Profile;
