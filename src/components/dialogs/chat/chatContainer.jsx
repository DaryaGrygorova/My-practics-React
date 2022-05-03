import { addMessActionCreator, addNewMessActionCreator } from '../../../Redux/Reducers/dialogs-reducer';
import Chat from './chat';

const ChatContainer = (props) => {

  let state= props.store.getState().MessagePage

  let onChangeMessText = (newText) => {
    props.store.dispatch(addNewMessActionCreator(newText));
  };

  let addMess = () => {
    props.store.dispatch(addMessActionCreator());
  };

  return (
   <div>
     <Chat handelChange={onChangeMessText}
           onClick={addMess}
           MessData={state.MessData}
           newMessText={state.newMessText}/>
   </div>
);
};

export default ChatContainer;
