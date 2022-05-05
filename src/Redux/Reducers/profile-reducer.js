const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  PostsData: [
    { id: 1, name: 'Jolly Docker', message: 'Hi, world!', time: '14:48', likeCounter: 15 },
    { id: 2, name: 'Jolly Docker', message: 'It\'s my first post', time: '14:55', likeCounter: 5 },
    { id: 3, name: 'Jolly Docker', message: 'How are you?', time: '14:58', likeCounter: 7 },
  ],
  NewPostText: '',
  Profile: null,
  // Profile: [{id: 13524, aboutMe: 'Слава Україні!',}],
  isFetching: true,

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
      let stateCopy = {...state,
        Profile: action.profile,
        }
        return stateCopy;
    }

    default: return state;
  }
};

export const setUserProfile= (profile) =>({type: SET_USER_PROFILE, profile});
export let addPost = () => ({type: ADD_POST});
export let addNewPost = (newText) => ({type: UPDATE_POST_TEXT, newText});
