import { connect } from 'react-redux';
import React  from 'react';
import Users from './Users';
import {
  followsSuccess,
  setCurrentPage,
  unfollowsSuccess, toggleIsFollowingInProgress, getUsersThunkCreator, unFollowThunkCreator, followThunkCreator,
} from '../../Redux/Reducers/users-reducer';
import Preloader from '../../common/preloader/isFetching_preloader';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.CurrentPage, this.props.PageSize);
  }

  onPageChanged = (pageNumb) => {
    this.props.getUsers(pageNumb, this.props.PageSize);
    this.props.setCurrentPage(pageNumb);
  }

  render() {
    return ( <div>
      {this.props.isFetching ? <Preloader /> : null}
        <Users Users={this.props.Users}
               UsersCount={this.props.UsersCount}
               PageSize={this.props.PageSize}
               CurrentPage={this.props.CurrentPage}
               unfollow = {this.props.unfollow}
               follow = {this.props.follow}
               onPageChanged={this.onPageChanged.bind(this)}
               isFollowingInProgress={this.props.isFollowingInProgress}
        />
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    Users: state.UsersPage.Users,
    PageSize: state.UsersPage.pageSize,
    UsersCount: state.UsersPage.totalUsersCount,
    CurrentPage: state.UsersPage.currentPage,
    isFetching: state.UsersPage.isFetching,
    isFollowingInProgress: state.UsersPage.isFollowingInProgress,
  };
};

export default compose(
  connect (mapStateToProps,
  {followsSuccess, unfollowsSuccess,
    setCurrentPage, toggleIsFollowingInProgress, getUsers: getUsersThunkCreator,
    unfollow: unFollowThunkCreator,  follow: followThunkCreator}),
    withAuthRedirect
)
(UsersContainer);