import { connect } from 'react-redux';
import Users from './Users';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from '../../Redux/Reducers/users-reducer';

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

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer;