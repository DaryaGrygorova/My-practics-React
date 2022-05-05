import React from 'react';
import axios from 'axios';
import Profile from './profile';
import { addNewPost, addPost, setUserID, setUserProfile } from '../../Redux/Reducers/profile-reducer';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    if (!this.props.UserID) {this.props.UserID = 13254}
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.UserID}`)
         .then(response => {
        this.props.setUserProfile(response.data);
        })
  }

  onPageChanged = (UserID) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.UserID}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount)
      })
  }

  render() {
    return <Profile {...this.props}/>;
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
  {addPost, addNewPost, setUserProfile, setUserID}) (ProfileContainer);
