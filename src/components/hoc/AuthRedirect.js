import { Navigate } from 'react-router-dom';
import React from 'react';

export const AuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render () {
      if (!this.props.isAuth) {return <Navigate to={'/login'} />};
      return <Component {...this.props} />
    };
};
    return RedirectComponent;}
