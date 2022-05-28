import { userAPI } from '../../API/API';

const FOLLOW = "USERS/FOLLOW";
const UNFOLLOW = "USERS/UNFOLLOW";
const SET_USERS = "USERS/SET_USERS";
const SET_CURRENT_PAGE = "USERS/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "USERS/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "USERS/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "USERS/TOGGLE_IS_FOLLOWING_IN_PROGRESS";

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
          : state.isFollowingInProgress.filter(id => id !== action.userId)
      };

      return stateCopy;
    }

    default: return state;
  }}

export const followsSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowsSuccess = (userId) => ({type: UNFOLLOW, userId});
export const requestUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumb) =>({type: SET_CURRENT_PAGE, pageNumb});
export const setUsersCount = (usersCount) =>({type: SET_TOTAL_USERS_COUNT, usersCount});
export const toggleIsFetching = (isFetching) =>({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingInProgress = (isFollowingInProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFollowingInProgress, userId });

export const requestUsersThunkCreator = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await userAPI.requestUsers(currentPage, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(requestUsers(response.items));
      dispatch(setUsersCount(response.totalCount));
  };
};

export const unFollowThunkCreator =  (userId) => {
  return async (dispatch) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    let response = await userAPI.getUnfollow(userId);

        dispatch(toggleIsFollowingInProgress(false, userId));
        if (response.resultCode === 0) {
          dispatch(unfollowsSuccess(userId));
        }
  };
};

export const followThunkCreator =  (userId) => {
  return async (dispatch) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    let response = await userAPI.getFollow(userId);
        dispatch(toggleIsFollowingInProgress(false, userId));
        if (response.resultCode === 0) {
          dispatch(followsSuccess(userId));
        };
  };
};
