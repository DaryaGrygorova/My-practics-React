import { ProfileAPI } from '../../API/API';

const ADD_POST = 'PROFILE/ADD-POST';
const DELETE_POST = 'PROFILE/DELETE_POST';
const SET_USER_PROFILE = "PROFILE/SET_USER_PROFILE";
const SET_USER_ID = "PROFILE/SET_USER_ID";
const TOGGLE_IS_REQUESTS_IN_PROGRESS = "PROFILE/TOGGLE_IS_REQUESTS_IN_PROGRESS"
const TOGGLE_IS_FETCHING_PROFILE = "PROFILE/TOGGLE_IS_FETCHING_PROFILE"
const SET_STATUS = "PROFILE/SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  PostsData: [
    { id: 1, name: 'Jolly Docker', message: 'Hi, world!', time: '14:48', likeCounter: 15 },
    { id: 2, name: 'Jolly Docker', message: 'It\'s my first post', time: '14:55', likeCounter: 5 },
    { id: 3, name: 'Jolly Docker', message: 'How are you?', time: '14:58', likeCounter: 7 },
  ],
  Profile: null,
  UserID: null,
  isFetching: false,
  isRequestsInProgress: false,
  status: "",

};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST:
      let newPost = action.NewPostText;
      return {...state,
        PostsData: [...state.PostsData, {id: 5, name: 'Jolly Docker', message: (newPost), time: '14:58', likeCounter: 0 }],
      };

    case DELETE_POST:
      return {...state,
        PostsData: state.PostsData.filter(post => post.id !== action.postId)
      };

    case SET_USER_PROFILE: {
      return {...state,
        Profile: action.profile,
        UserID: action.userId,
        }
    }

    case SET_USER_ID: {
      return {...state,
        UserID: action.userID,
        
      }
    }

    case TOGGLE_IS_FETCHING_PROFILE:
    {
      return {...state,
        isFetching: action.isFetching,
      }
      }
      
    case TOGGLE_IS_REQUESTS_IN_PROGRESS:
      {
        return {
          ...state,
          isRequestsInProgress: action.isRequestsInProgress,
        }
      }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        Profile: {
          ...state.Profile,
          photos: action.photos
        }
      }
    }
      
    default: return state;
  }
};

export const setUserProfile= (profile, userId) =>({type: SET_USER_PROFILE, profile, userId});
export let addPost = (NewPostText) => ({type: ADD_POST, NewPostText});
export let deletePost= (postId) => ({type: DELETE_POST, postId});
export const setUserID = (userID) =>({type: SET_USER_ID, userID});
export const toggleIsFetchingProfile = (isFetching) =>({type: TOGGLE_IS_FETCHING_PROFILE, isFetching});
export const toggleIsRequestsInProgress = (isRequestsInProgress) =>({type: TOGGLE_IS_REQUESTS_IN_PROGRESS, isRequestsInProgress});
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos});

export const getProfileThunkCreator = (userId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingProfile(true));
    let response = await ProfileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data, userId));
    dispatch(toggleIsFetchingProfile(false));
  };
};

export const getStatusThunkCreator = (userID) => {
  return async (dispatch) => {
        dispatch(toggleIsRequestsInProgress(true));
    let response = await ProfileAPI.getStatus(userID)
    dispatch(setStatus(response.data));
        dispatch(toggleIsRequestsInProgress(false));

  };
};

export const updateStatusThunkCreator = (status) => {
  return async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
        };
  };
};

export const addUserPhotoThunkCreator = (file) => {
  return async (dispatch) => {
    let response = await ProfileAPI.addUserPhoto(file)
    if (response.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos));
    };
  };
}