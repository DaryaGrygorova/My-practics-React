import React from 'react';
import axios from 'axios';
import Profile from './profile';
import { addNewPost, addPost, setUserProfile } from '../../Redux/Reducers/profile-reducer';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/13524`)
         .then(response => {
        this.props.setUserProfile(response.data);
      })
  }

  // onPageChanged = (pageNumb) => {
  //   this.props.toggleIsFetching(true);
  //   this.props.setCurrentPage(pageNumb);
  //   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumb}&count=${this.props.PageSize}`)
  //     .then(response => {
  //       this.props.toggleIsFetching(false);
  //       this.props.setUsers(response.data.items);
  //       this.props.setUsersCount(response.data.totalCount)
  //
  //     })
  // }

  render() {
    return <Profile {...this.props}/>;
  };
}

let mapStateToProps = (state) => {
  return {
  Profile: state.ProfilePage.Profile,
  PostsData: state.ProfilePage.PostsData,
  NewPostText: state.ProfilePage.NewPostText,
 }};

export default connect (mapStateToProps,
  {addPost, addNewPost, setUserProfile}) (ProfileContainer);
