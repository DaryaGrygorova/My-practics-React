import { addMessActionCreator, addNewMessActionCreator } from '../../../Redux/Reducers/dialogs-reducer';
import Chat from './chat';

const ChatContainer = (props) => {

  let onChangeMessText = (newText) => {
    props.dispatch(addNewMessActionCreator(newText));
  };

  let addMess = () => {
    props.dispatch(addMessActionCreator());
  };

  return (
   <div>
     <Chat handelChange={onChangeMessText} onClick={addMess} MessData={props.MessData} newMessText={props.newMessText}/>
   </div>
);
};

export default ChatContainer;
