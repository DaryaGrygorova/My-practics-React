import { ProfileAPI } from '../../API/API';

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_ID = "SET_USER_ID";
const TOGGLE_IS_FETCHING_PROFILE = "TOGGLE_IS_FETCHING_PROFILE"
const SET_STATUS = "SET_STATUS";

let initialState = {
  PostsData: [
    { id: 1, name: 'Jolly Docker', message: 'Hi, world!', time: '14:48', likeCounter: 15 },
    { id: 2, name: 'Jolly Docker', message: 'It\'s my first post', time: '14:55', likeCounter: 5 },
    { id: 3, name: 'Jolly Docker', message: 'How are you?', time: '14:58', likeCounter: 7 },
  ],
  NewPostText: '',
  Profile: null,
  UserID: null,
  isFetching: true,
  status: "",

};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST_TEXT:
      return {
        ...state,
        NewPostText: action.newText};

    case ADD_POST:
      let newPost = state.NewPostText;
      return {...state,
        NewPostText: '',
        PostsData: [...state.PostsData, {id: 5, name: 'Jolly Docker', message: (newPost), time: '14:58', likeCounter: 0 }],
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

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }

    default: return state;
  }
};

export const setUserProfile= (profile, userId) =>({type: SET_USER_PROFILE, profile, userId});
export let addPost = () => ({type: ADD_POST});
export let addNewPost = (newText) => ({type: UPDATE_POST_TEXT, newText});
export const setUserID = (userID) =>({type: SET_USER_ID, userID});
export const toggleIsFetchingProfile = (isFetching) =>({type: TOGGLE_IS_FETCHING_PROFILE, isFetching});
export const setStatus = (status) =>({type: SET_STATUS, status});

export const getProfileThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingProfile(true));
    ProfileAPI.getProfile(userId)
    .then(response => {
      dispatch(toggleIsFetchingProfile(false));
      dispatch(setUserProfile(response.data, userId));
    });
  };
};

export const getStatusThunkCreator = (userID) => {
  return (dispatch) => {
  ProfileAPI.getStatus(userID)
    .then(response => {
      dispatch(setStatus(response.data));
    });
};
};

export const updateStatusThunkCreator = (status) => {
  return (dispatch) => {
    ProfileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      };
      });
  };
};