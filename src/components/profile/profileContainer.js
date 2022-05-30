import React from 'react';
import Profile from './profile';
import {
  addPost, getProfileThunkCreator,
  getStatusThunkCreator, setUserID,
  toggleIsFetchingProfile, updateStatusThunkCreator,
} from '../../Redux/Reducers/profile-reducer';
import { connect } from 'react-redux';
import Preloader from '../../common/preloader/isFetching_preloader';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    console.log ("did mout profile")
    let userID = this.props.UserID;
    debugger
    if (!userID) {userID = this.props.authorizedUserId}
    this.onPageChanged(userID);
     };

  componentDidUpdate(prevProps, prevState, snapShot) { 
    debugger
    if (this.props.UserID !== prevProps.UserID )
    { this.onPageChanged(this.props.UserID);}
  };

  onPageChanged = (UserID) => {
    this.props.setUserID(UserID);
    this.props.getProfile(UserID);
    this.props.getStatus(UserID);
  };

  render() {
    return ( <div>
      {this.props.isFetching ? <Preloader /> : null}
      <Profile {...this.props} onPageChanged={this.onPageChanged.bind(this)} />
      </div> )};
};

let mapStateToProps = (state) => {
  return {
    Profile: state.ProfilePage.Profile,
    PostsData: state.ProfilePage.PostsData,
    NewPostText: state.ProfilePage.NewPostText,
    UserID: state.ProfilePage.UserID,
    isFetching: state.ProfilePage.isFetching,
    status: state.ProfilePage.status,
    authorizedUserId: state.AuthPage.UserID,
    isAuth: state.AuthPage.isAuth,
 }};

export default compose(
  connect (mapStateToProps,
      {addPost, setUserID,
        getProfile: getProfileThunkCreator, toggleIsFetchingProfile,
        getStatus: getStatusThunkCreator, updateStatus: updateStatusThunkCreator}),
  withAuthRedirect
)
  (ProfileContainer);


