const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export const profileReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POST_TEXT:
      state.NewPostText = action.newText;
      return (state);

    case ADD_POST:
      let newPost = { id: 5,
        name: 'Jolly Docker',
        message: (state.NewPostText),
        time: '14:58',
        likeCounter: 0 };
      state.PostsData.push(newPost);
      state.NewPostText = '';
      return (state);

    default:
      return (state);
  }
};