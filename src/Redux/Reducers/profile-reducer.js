const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
  PostsData: [
    { id: 1, name: 'Jolly Docker', message: 'Hi, world!', time: '14:48', likeCounter: 15 },
    { id: 2, name: 'Jolly Docker', message: 'It\'s my first post', time: '14:55', likeCounter: 5 },
    { id: 3, name: 'Jolly Docker', message: 'How are you?', time: '14:58', likeCounter: 7 },
  ],
  NewPostText: '',
  Users: { id: 1, userName: 'Jolly Docker', about: 'Pretty lady' },
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.NewPostText = action.newText;
      return (stateCopy);
    }

    case ADD_POST: {
      let newPost = {
        id: 5,
        name: 'Jolly Docker',
        message: (state.NewPostText),
        time: '14:58',
        likeCounter: 0
      };

      let stateCopy = {...state};
      stateCopy.PostsData = [...state.PostsData];
      stateCopy.PostsData.push(newPost);
      stateCopy.NewPostText = '';
      return stateCopy;
    }
    default:
      return state;
  }
};

export let addPostActionCreator = () => ({type: ADD_POST});

export let addNewPostActionCreator = (newText) => ({
  type: UPDATE_POST_TEXT,
  newText: (newText),
});
