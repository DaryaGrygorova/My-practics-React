const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  Users: []
};
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = {
        Users: state.Users.map ( Users => {
          if (Users.id === action.userId) {
            return {...Users, followed: true} }
          return Users;
        }
      )}
      return stateCopy;}

    case UNFOLLOW: {
      let stateCopy = {
        Users: state.Users.map ( Users => {
          if (Users.id === action.userId) {
            return {...Users, followed: false} }
          return Users;
      }
    )}
      return stateCopy;}

    case SET_USERS: {
      return {...state,
      Users: [...action.users]};
    }
    default:  return state;
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});