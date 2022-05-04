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
    follows: (userId) => dispatch(followAC(userId)),
    unfollows: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (user) => dispatch(setUsersAC(user))
  };
};

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer;