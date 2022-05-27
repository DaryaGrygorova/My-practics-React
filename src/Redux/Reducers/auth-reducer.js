import { authAPI } from '../../API/API';

const IS_SUBMIT_ERROR = 'IS_SUBMIT_ERROR';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  UserID: null,
  email: null,
  login: null,
  isAuth: false,
  errorStatus: false,
  errorMessage: '',
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

    case IS_SUBMIT_ERROR: {
      return {
        ...state,
        errorStatus: action.status,
        errorMessage: action.message
      }
    }
    default: return state;
  }}

export const setUserData = (UserID, email, login, isAuth) =>({type: SET_USER_DATA, UserID, email, login, isAuth});
export const isSubmitError = (status, message) => ({type: IS_SUBMIT_ERROR, status, message})
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
          dispatch(isSubmitError(false, ''))
        } else {
          let message = data.messages
          dispatch(isSubmitError(true, message))
        }

          ;
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

