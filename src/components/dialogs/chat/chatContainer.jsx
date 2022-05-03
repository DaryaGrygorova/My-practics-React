import { addMessActionCreator, addNewMessActionCreator } from '../../../Redux/Reducers/dialogs-reducer';
import Chat from './chat';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    MessData: state.MessagePage.MessData,
    newMessText: state.MessagePage.newMessText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (newText) => dispatch(addNewMessActionCreator(newText)),
    onClick: () => dispatch(addMessActionCreator())
  };
};

const ChatContainer = connect (mapStateToProps, mapDispatchToProps) (Chat);

export default ChatContainer;
