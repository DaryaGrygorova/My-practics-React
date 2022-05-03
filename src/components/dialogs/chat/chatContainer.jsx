import { addMessActionCreator, addNewMessActionCreator } from '../../../Redux/Reducers/dialogs-reducer';
import Chat from './chat';
import { connect } from 'react-redux';

// const ChatContainer = (props) => {
//
//   let state= props.store.getState().MessagePage
//
//   let onChangeMessText = (newText) => {
//     props.store.dispatch(addNewMessActionCreator(newText));
//   };
//
//   let addMess = () => {
//     props.store.dispatch(addMessActionCreator());
//   };
//
//   return (
//    <div>
//      <Chat handelChange={onChangeMessText}
//            onClick={addMess}
//            MessData={state.MessData}
//            newMessText={state.newMessText}/>
//    </div>
// );
// };

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
