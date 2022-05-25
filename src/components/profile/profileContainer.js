import React from 'react';
import Profile from './profile';
import {
  addNewPost,
  addPost,
  getProfileThunkCreator,
  setUserID,
} from '../../Redux/Reducers/profile-reducer';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.getProfile(this.props.UserID)}

  //   if (!this.props.UserID) {
  //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/23812`)
  //        .then(response => {
  //       this.props.setUserProfile(response.data);
  //       })}
  //   else {
  //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.UserID}`)
  //     .then(response => {
  //       this.props.setUserProfile(response.data);
  //     })}
  // }

  onPageChanged = () => {this.props.getProfile(this.props.UserID)}

  render() {
    return <Profile {...this.props} onPageChanged={this.onPageChanged.bind(this)}/>;
  };
}

let mapStateToProps = (state) => {
  return {
    CurrentUserID: state.ProfilePage.CurrentUserID,
    Profile: state.ProfilePage.Profile,
    PostsData: state.ProfilePage.PostsData,
    NewPostText: state.ProfilePage.NewPostText,
    UserID: state.ProfilePage.UserID,
 }};

export default connect (mapStateToProps,
  {addPost, addNewPost, setUserID, getProfile: getProfileThunkCreator}) (ProfileContainer);
