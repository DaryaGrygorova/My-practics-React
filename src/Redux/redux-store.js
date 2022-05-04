import { combineReducers, createStore } from 'redux';
import { profileReducer } from './Reducers/profile-reducer';
import { dialogsReducer } from './Reducers/dialogs-reducer';
import { sidebarReducer } from './Reducers/sidebar-reducer';
import { UserReducer } from './Reducers/users-reducer';

let reducerStack = combineReducers({
  ProfilePage: profileReducer,
  MessagePage: dialogsReducer,
  UsersPage: UserReducer,
  Sidebar: sidebarReducer,
  }
);

let store = createStore(reducerStack);
debugger;
window.store=store
export default store;