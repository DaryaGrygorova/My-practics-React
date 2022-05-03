import { connect } from 'react-redux';
import UserInfo from './userInfo';

let mapStateToProps = (state) => {
  return {
    UserName: state.ProfilePage.Users.userName,
    UserAbout: state.ProfilePage.Users.about,
  };
};

const UserInfoContainer = connect (mapStateToProps) (UserInfo);

export default UserInfoContainer;
