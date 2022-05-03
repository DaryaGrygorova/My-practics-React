import { addNewPostActionCreator, addPostActionCreator } from '../../../Redux/Reducers/profile-reducer';
import MyPosts from './myPosts';

const MyPostsContainer = (props) => {

let onChange = (newText) => {
  props.dispatch(addNewPostActionCreator(newText));
};

let addPost = () => {
  props.dispatch(addPostActionCreator());
}
return (
    <div>
      <MyPosts onClick={addPost} handleChange={onChange} PostsData={props.PostsData} NewPostText={props.NewPostText}/>
    </div>
  );
};

export default MyPostsContainer;
