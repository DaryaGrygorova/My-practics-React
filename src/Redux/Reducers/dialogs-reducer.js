const ADD_MESS = 'ADD-MESS';
const UPDATE_MESS_TEXT = 'UPDATE-MESS-TEXT';

export const dialogsReducer = (state, action) => {
 if (action.type === UPDATE_MESS_TEXT) {
   state.newMessText = action.newText;
  }
 else if (action.type === ADD_MESS) {
   let newMess = { id: 10,
     name: 'Frank Sinatra',
     message: (state.newMessText),
     time: '15:58' };
   state.MessData.push(newMess);
   state.newMessText = '';
 }
  return state;
}