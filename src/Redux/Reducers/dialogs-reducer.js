const ADD_MESS = 'ADD-MESS';
const UPDATE_MESS_TEXT = 'UPDATE-MESS-TEXT';

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_MESS_TEXT:
      state.newMessText = action.newText;
      return state;

    case ADD_MESS:
      let newMess = { id: 10,
         name: 'Frank Sinatra',
        message: (state.newMessText),
         time: '15:58' };
       state.MessData.push(newMess);
       state.newMessText = '';
      return state;

    default:
      return state;
  }
};