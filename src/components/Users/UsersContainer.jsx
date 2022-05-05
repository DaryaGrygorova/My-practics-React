import { connect } from 'react-redux';
import React  from 'react';
import axios from 'axios';
import Users from './Users';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from '../../Redux/Reducers/users-reducer';

class UsersAPI extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumb) => {
    this.props.setCurrentPage(pageNumb);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumb}&count=${this.props.PageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount)

      })
  }

  render() {
    return (<Users Users={this.props.Users}
                   UsersCount={this.props.UsersCount}
                   PageSize={this.props.PageSize}
                   CurrentPage={this.props.CurrentPage}
                   unfollows={this.props.unfollows}
                   follows={this.props.follows}
                   onPageChanged={this.onPageChanged.bind(this)}
    />)
  }
}

const mapStateToProps = (state) => {
  return {
    Users: state.UsersPage.Users,
    PageSize: state.UsersPage.pageSize,
    UsersCount: state.UsersPage.totalUsersCount,
    CurrentPage: state.UsersPage.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follows: (userId) => dispatch(followAC(userId)),
    unfollows: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (user) => dispatch(setUsersAC(user)),
    setCurrentPage: (pageNumb) => dispatch(setCurrentPageAC(pageNumb)),
    setUsersCount: (usersCount) => dispatch(setTotalUsersCountAC(usersCount))
  };
};

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (UsersAPI)

export default UsersContainer;