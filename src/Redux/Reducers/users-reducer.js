const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
  Users: [],
  pageSize: 4,
  totalUsersCount: 20,
  currentPage: 1,
  isFetching: true,
  isFollowingInProgress: [],
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      let stateCopy = { ...state,
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
      let stateCopy = { ...state,
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
    case TOGGLE_IS_FETCHING: {
      let stateCopy = { ...state,
        isFetching: action.isFetching};

      return stateCopy;
    }
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
      let stateCopy = { ...state,
        isFollowingInProgress: action.isFollowingInProgress
          ? [...state.isFollowingInProgress, action.userId]
          : state.isFollowingInProgress.filter(id => id != action.userId)
      };

      return stateCopy;
    }

    default: return state;
  }}

export const follows = (userId) => ({type: FOLLOW, userId});
export const unfollows = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumb) =>({type: SET_CURRENT_PAGE, pageNumb});
export const setUsersCount = (usersCount) =>({type: SET_TOTAL_USERS_COUNT, usersCount})
export const toggleIsFetching = (isFetching) =>({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingInProgress = (isFollowingInProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFollowingInProgress, userId });