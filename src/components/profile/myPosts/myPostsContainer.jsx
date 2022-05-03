import { addNewPostActionCreator, addPostActionCreator } from '../../../Redux/Reducers/profile-reducer';
import MyPosts from './myPosts';

const MyPostsContainer = (props) => {

  let state= props.store.getState().ProfilePage

let onChange = (newText) => {
  props.store.dispatch(addNewPostActionCreator(newText));
};

let addPost = () => {
  props.store.dispatch(addPostActionCreator());
}
return (
    <div>
      <MyPosts onClick={addPost}
               handleChange={onChange}
               PostsData={state.PostsData}
               NewPostText={state.NewPostText}/>
    </div>
  );
};

export default MyPostsContainer;
