import { connect } from 'react-redux';
import Users from './Users';
import { followAC, setUsersAC, unfollowAC } from '../../Redux/Reducers/users-reducer';

const mapStateToProps = (state) => {
  return {
    Users: state.UsersPage.Users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users))
  };
};

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer;