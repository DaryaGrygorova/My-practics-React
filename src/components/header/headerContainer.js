import React from 'react'
import Header from './header';
import { setUserData } from '../../Redux/Reducers/auth-reducer';
import { connect } from 'react-redux';
import { userAPI } from '../../API/API';

class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.getAuth ()
      .then( data => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data
          this.props.setUserData(id, email, login);
        }
      })}

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

export default connect (mapStateToProps, {setUserData}) (HeaderContainer);
