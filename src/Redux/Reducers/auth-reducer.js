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
        ...action.userData,
        isAuth: true,
      };
    }

    default: return state;
  }}

export const setUserData = (UserID, email, login) =>({type: SET_USER_DATA, userData: {UserID, email, login}});
export default AuthReducer;