import Post from './post/post';

const MyPosts = (props) => {
  return (
    <div>
      <Post id={props.id} name={props.name} message={props.message} likeCounter={props.likeCounter} time={props.time}/>
    </div>
  );
};

export default MyPosts;
