import React from 'react';
import Profile from './profile';
import {
  addNewPost,
  addPost,
  getProfileThunkCreator,
  setUserID, toggleIsFetchingProfile,
} from '../../Redux/Reducers/profile-reducer';
import { connect } from 'react-redux';
import Preloader from '../../common/preloader/isFetching_preloader';
import { Navigate } from 'react-router-dom';
import { AuthRedirect } from '../hoc/AuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userID = this.props.UserID;
    if (!userID) {
      userID = 23812};
    this.props.getProfile(userID)};

  onPageChanged = (UserID) => {
    setUserID(UserID);
    this.props.getProfile(UserID)};

  render() {

    if (!this.props.isAuth) {return <Navigate to={'/login'} />};

    return ( <div>
      {this.props.isFetching ? <Preloader /> : null}
      <Profile {...this.props} onPageChanged={this.onPageChanged.bind(this)} />
      </div> )};
}

let AuthRedirectWrapperComponent = AuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
  return {
    CurrentUserID: state.ProfilePage.CurrentUserID,
    Profile: state.ProfilePage.Profile,
    PostsData: state.ProfilePage.PostsData,
    NewPostText: state.ProfilePage.NewPostText,
    UserID: state.ProfilePage.UserID,
    isFetching: state.ProfilePage.isFetching,
    isAuth: state.Auth.isAuth,
 }};

export default connect (mapStateToProps,
  {addPost, addNewPost, setUserID, getProfile: getProfileThunkCreator, toggleIsFetchingProfile}) (AuthRedirectWrapperComponent);
