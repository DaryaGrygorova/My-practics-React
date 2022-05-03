const ADD_MESS = 'ADD-MESS';
const UPDATE_MESS_TEXT = 'UPDATE-MESS-TEXT';

let initialState = {
  ContactsData: [
    { name: 'Sara Connor', id: 'Connor' },
    { name: 'Lisa Fahrenheit', id: 'Fahrenheit' },
    { name: 'Rose Friedman', id: 'Friedman' },
    { name: 'Frank Sinatra', id: 'Sinatra' },
    { name: 'John Silver', id: 'Silver' },
    { name: 'Tomas Fisher', id: 'Fisher' },
    { name: 'Lili Walker', id: 'Walker' }
  ],
  MessData: [
    { id: 1, message: 'Hello!', name: 'Frank Sinatra', time: '15:20' },
    { id: 2, message: 'It\'s my first private chat', name: 'Frank Sinatra', time: '15:21' },
    { id: 3, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:21' },
    { id: 4, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
    { id: 5, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
    { id: 6, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
    { id: 7, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
    { id: 8, message: 'It\'s my first message!', name: 'Frank Sinatra', time: '15:22' },
    { id: 9, message: 'HaHaHa!!! I like it!!', name: 'Frank Sinatra', time: '15:24' }
  ],
  newMessText: '',
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESS_TEXT: {
      let stateCopy = {
        ...state,
        newMessText: action.newText};
      return stateCopy;
    }

    case ADD_MESS: {
      let newMess = state.newMessText;

      let stateCopy = {
        ...state,
        newMessText: '',
        MessData: [...state.MessData, { id: 10, name: 'Frank Sinatra', message: newMess, time: '15:58' }]
      };
      return stateCopy;
    }

    default: return state;
  }
};

export const addNewMessActionCreator = (newText) => ({
  type: UPDATE_MESS_TEXT,
  newText: (newText),
});

export const addMessActionCreator = () => ({type: ADD_MESS});