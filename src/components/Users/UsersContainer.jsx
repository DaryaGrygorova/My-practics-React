import { connect } from 'react-redux';
import React  from 'react';
import Users from './Users';
import {
  follows,
  setCurrentPage,
  setUsers, setUsersCount, toggleIsFetching,
  unfollows, toggleIsFollowingInProgress,
} from '../../Redux/Reducers/users-reducer';
import Preloader from '../../common/preloader/isFetching_preloader';
import { userAPI } from '../../API/API';

class UsersAPI extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    userAPI.getUsers (this.props.CurrentPage, this.props.PageSize).then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersCount(data.totalCount);
      })
  }

  onPageChanged = (pageNumb) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumb);
    userAPI.getUsers (pageNumb, this.props.PageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      })
  }

  render() {
    return ( <div>
      {this.props.isFetching ? <Preloader /> : null}
        <Users Users={this.props.Users}
               UsersCount={this.props.UsersCount}
               PageSize={this.props.PageSize}
               CurrentPage={this.props.CurrentPage}
               unfollows={this.props.unfollows}
               follows={this.props.follows}
               onPageChanged={this.onPageChanged.bind(this)}
               toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
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

const UsersContainer = connect (mapStateToProps,
                {follows, unfollows, setUsers, setCurrentPage, setUsersCount, toggleIsFetching, toggleIsFollowingInProgress })
                                (UsersAPI);

export default UsersContainer;