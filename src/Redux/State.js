const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESS = 'ADD-MESS';
const UPDATE_MESS_TEXT = 'UPDATE-MESS-TEXT';

let store = {
  _State: {
  ProfilePage: {
    PostsData: [
      { id: 1, name: 'Jolly Docker', message: 'Hi, world!', time: '14:48', likeCounter: 15 },
      { id: 2, name: 'Jolly Docker', message: 'It\'s my first post', time: '14:55', likeCounter: 5 },
      { id: 3, name: 'Jolly Docker', message: 'How are you?', time: '14:58', likeCounter: 7 },
    ],
    NewPostText: '',
    Users: [
      {id: 1, userName: 'Jolly Docker', about: 'Pretty lady'}
    ]
  },
  MessagePage: {
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
  }
  },

  _callSubscriber() {},

  getState() {
   return this._State;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { // action- объэкт имеющий атрибут type в котором записано какое именно действие необходимо совершить
    if (action.type === UPDATE_POST_TEXT)  {
      this._State.ProfilePage.NewPostText = action.newText;
      this._callSubscriber(this._State);
    }
    else if (action.type === UPDATE_MESS_TEXT) {
      this._State.MessagePage.newMessText = action.newText;
      this._callSubscriber(this._State);
    }
    else if (action.type === ADD_POST) {
    let newPost = { id: 5,
                    name: 'Jolly Docker',
                    message: (this._State.ProfilePage.NewPostText),
                    time: '14:58',
                    likeCounter: 0 };
    this._State.ProfilePage.PostsData.push(newPost);
    this._State.ProfilePage.NewPostText = '';
    this._callSubscriber(this._State);
  }
    else if (action.type === ADD_MESS) {
    let newMess = { id: 10,
      name: 'Frank Sinatra',
      message: (this._State.MessagePage.newMessText),
      time: '15:58' };
    this._State.MessagePage.MessData.push(newMess);
    this._callSubscriber(this._State);
    this._State.MessagePage.newMessText = '';
  }
  },
};

export default store;
window.store=store

export let addPostActionCreator = () => ({type: ADD_POST});

export let addNewPostActionCreator = (newText) => ({
    type: UPDATE_POST_TEXT,
    newText: (newText),
});

export const addNewMessActionCreator = (newText) => ({
    type: UPDATE_MESS_TEXT,
    newText: (newText),
  });

export const addMessActionCreator = () => ({type: ADD_MESS});