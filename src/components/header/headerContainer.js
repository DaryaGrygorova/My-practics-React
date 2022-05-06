import React from 'react'
import Header from './header';
// import axios from 'axios';
import { setUserData } from '../../Redux/Reducers/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {

  componentDidMount() {
    // axios.get(`https://social-network.samuraijs.com/auth/me`,
    //   {withCredentials: true})
    //   .then(response => {
    //     if (response.data.status === 200) {
    //       debugger;
    //       let {id, email, login} = {response.data.data}
    //       this.props.setUserData(id, email, login);
    //     }
        let { UserID, email, login} = { UserID: 23812, email: '_irex_@bk.ru', login: '_irex_1987' };
        this.props.setUserData(UserID, email, login);
        debugger;}

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
