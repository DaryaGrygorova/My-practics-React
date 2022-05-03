import { addNewPostActionCreator, addPostActionCreator } from '../../../Redux/Reducers/profile-reducer';
import MyPosts from './myPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    PostsData: state.ProfilePage.PostsData,
    NewPostText: state.ProfilePage.NewPostText
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      handleChange: (newText) => dispatch(addNewPostActionCreator(newText)),
      onClick: () => dispatch(addPostActionCreator())
    };
  };

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;