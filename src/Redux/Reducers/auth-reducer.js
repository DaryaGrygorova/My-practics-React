import { authAPI } from '../../API/API';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  UserID: 23812,
  email: null,
  login: null,
  isAuth: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.userData,
        isAuth: true,
      };
    }

    default: return state;
  }}

export const setUserData = (UserID, email, login) =>({type: SET_USER_DATA, userData: {UserID, email, login}});
export const getAuthThunkCreator = () => {
  return (dispatch) => {
    authAPI.getAuth ()
      .then( data => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data
          dispatch(setUserData(id, email, login));
        };
      });
  };
};


export default AuthReducer;

