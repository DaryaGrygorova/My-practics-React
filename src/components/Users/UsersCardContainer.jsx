import { connect } from 'react-redux';
import { followAC, unfollowAC } from '../../Redux/Reducers/users-reducer';
import UserCard from './UserCard';

const mapStateToProps = (state) => {
  return {
    Users: state.UsersPage.Users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      foll: (userId) => dispatch(followAC(userId)),
    unfoll: (userId) => dispatch(unfollowAC(userId)),
  };
};

const UsersCardContainer = connect (mapStateToProps, mapDispatchToProps) (UserCard)

export default UsersCardContainer;