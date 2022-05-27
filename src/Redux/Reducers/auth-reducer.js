import { authAPI } from '../../API/API';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  UserID: null,
  email: null,
  login: null,
  isAuth: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        UserID: action.UserID,
        email: action.email,
        login: action.login,
        isAuth: action.isAuth,
      };
    }

    default: return state;
  }}

export const setUserData = (UserID, email, login, isAuth) =>({type: SET_USER_DATA, UserID, email, login, isAuth});
export const getAuthThunkCreator = () => {
  return (dispatch) => {
    authAPI.getAuth ()
      .then( data => {
        if (data.resultCode === 0) {
          let { id, email, login} = data.data
          dispatch(setUserData(id, email, login, true));
        };
      });
  };
};

export const logInThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.logIn (email, password, rememberMe)
      .then( data => {
        if (data.resultCode === 0) {
          dispatch(getAuthThunkCreator());
        };
      });
  };
};

export const logOutThunkCreator = () => {
  return (dispatch) => {
    authAPI.logOut()
      .then( data => {
        if (data.resultCode === 0) {
          dispatch(setUserData(null, null, null, false));
        };
      });
  };
};

export default AuthReducer;

