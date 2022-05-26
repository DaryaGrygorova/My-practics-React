import { connect } from 'react-redux';
import Dialogs from './dialogs';
import { AuthRedirect } from '../hoc/AuthRedirect';

let AuthRedirectWrapper = AuthRedirect(Dialogs);

const mapStateToProps = (state) => {
    return {
      ContactsData: state.MessagePage.ContactsData,
      isAuth: state.Auth.isAuth,
    };
  };

const DialogsContainer = connect (mapStateToProps) (AuthRedirectWrapper)

export default DialogsContainer;
