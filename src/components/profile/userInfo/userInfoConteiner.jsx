import { connect } from 'react-redux';
import UserInfo from './userInfo';

const mapStateToProps = (state) => {
  return {
    UserName: state.ProfilePage.User.userName,
    UserAbout: state.ProfilePage.User.about,
  };
};

const UserInfoContainer = connect (mapStateToProps) (UserInfo);

export default UserInfoContainer;
