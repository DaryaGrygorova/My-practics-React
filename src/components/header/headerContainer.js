import React from 'react'
import Header from './header';
import { getAuthThunkCreator, setUserData } from '../../Redux/Reducers/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth()}

  render() {
    return (
      <Header {...this.props} />
    )
  };
}

const mapStateToProps = (state) => ({
  UserID: state.Auth.UserID,
  email: state.Auth.email,
  login: state.Auth.login,
  isAuth: state.Auth.isAuth})

export default connect (mapStateToProps, {setUserData, getAuth: getAuthThunkCreator}) (HeaderContainer);
