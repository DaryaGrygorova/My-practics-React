import { connect } from 'react-redux';
import React  from 'react';
import axios from 'axios';
import Users from './Users';
import {
  follow,
  setCurrentPage,
  setUsers, setUsersCount, toggleIsFetching,
  unfollow,
} from '../../Redux/Reducers/users-reducer';
import Preloader from '../../common/preloader/isFetching_preloader';

class UsersAPI extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      })
  }

  onPageChanged = (pageNumb) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumb);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumb}&count=${this.props.PageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount)

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
               onPageChanged={this.onPageChanged.bind(this)} />
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
  };
};

const UsersContainer = connect (mapStateToProps,
                {follow, unfollow, setUsers, setCurrentPage, setUsersCount, toggleIsFetching })
                                (UsersAPI);

export default UsersContainer;