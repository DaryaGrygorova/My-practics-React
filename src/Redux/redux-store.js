import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { profileReducer } from './Reducers/profile-reducer';
import { dialogsReducer } from './Reducers/dialogs-reducer';
import { sidebarReducer } from './Reducers/sidebar-reducer';
import { UserReducer } from './Reducers/users-reducer';
import AuthReducer from './Reducers/auth-reducer';

let reducerStack = combineReducers({
  ProfilePage: profileReducer,
  MessagePage: dialogsReducer,
  UsersPage: UserReducer,
  Sidebar: sidebarReducer,
  AuthPage: AuthReducer,
  }
);

let store = createStore(reducerStack, applyMiddleware(thunkMiddleware));
window.store=store
export default store;