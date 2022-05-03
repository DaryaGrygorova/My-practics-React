import { combineReducers, createStore } from 'redux';
import { profileReducer } from './Reducers/profile-reducer';
import { dialogsReducer } from './Reducers/dialogs-reducer';
import { sidebarReducer } from './Reducers/sidebar-reducer';

let reducerStack = combineReducers({
  ProfilePage: profileReducer,
  MessagePage: dialogsReducer,
  Sidebar: sidebarReducer,
  }
);

let store = createStore(reducerStack);
window.store=store

export default store;