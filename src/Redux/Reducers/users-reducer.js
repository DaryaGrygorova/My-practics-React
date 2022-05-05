const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

let initialState = {
  Users: [],
  pageSize: 4,
  totalUsersCount: 20,
  currentPage: 1,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = {
        Users: state.Users.map( Users => {
            if (Users.id === action.userId) {
              return { ...Users, followed: true }
            }
            return Users;
          }
        )
      }
      return stateCopy;
    }

    case UNFOLLOW: {
      let stateCopy = {
        Users: state.Users.map ( Users => {
            if (Users.id === action.userId) {
              return { ...Users, followed: false }
            }
            return Users;
          }
        )
      }
      return stateCopy;
    }

    case SET_USERS: {
      return {
        ...state,
        Users: [...action.users]
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.pageNumb,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.usersCount,
      };
    }

    default: return state;
  }}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (pageNumb) =>({type: SET_CURRENT_PAGE, pageNumb});
export const setTotalUsersCountAC = (usersCount) =>({type: SET_TOTAL_USERS_COUNT, usersCount})