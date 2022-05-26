import { connect } from 'react-redux';
import Dialogs from './dialogs';
import { withAuthRedirect } from '../hoc/AuthRedirect';

const mapStateToProps = (state) => {
    return {
      ContactsData: state.MessagePage.ContactsData,
    };
  };

const DialogsContainer = withAuthRedirect(connect (mapStateToProps) (Dialogs))

export default DialogsContainer;
