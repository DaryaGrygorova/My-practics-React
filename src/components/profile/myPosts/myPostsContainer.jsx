import { addNewPostActionCreator, addPostActionCreator } from '../../../Redux/Reducers/profile-reducer';
import MyPosts from './myPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//
//   let state= props.store.getState().ProfilePage
//
// let onChange = (newText) => {
//   props.store.dispatch(addNewPostActionCreator(newText));
// };
//
// let addPost = () => {
//   props.store.dispatch(addPostActionCreator());
// }
// return (
//     <div>
//       <MyPosts onClick={addPost}
//                handleChange={onChange}
//                PostsData={state.PostsData}
//                NewPostText={state.NewPostText}/>
//     </div>
//   );
// };

let mapStateToProps = (state) => {
  return {
    PostsData: state.ProfilePage.PostsData,
    NewPostText: state.ProfilePage.NewPostText
  };
};

  let mapDispatchToProps = (dispatch) => {
    return {
      handleChange: (newText) => dispatch(addNewPostActionCreator(newText)),
      onClick: () => dispatch(addPostActionCreator())
    };
  };

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;