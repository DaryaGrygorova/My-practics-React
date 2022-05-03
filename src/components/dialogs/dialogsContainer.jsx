import { connect } from 'react-redux';
import Dialogs from './dialogs';

const mapStateToProps = (state) => {
    return {
      ContactsData: state.MessagePage.ContactsData,
    };
  };

const DialogsContainer = connect (mapStateToProps) (Dialogs)

export default DialogsContainer;
