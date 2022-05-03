import styles from '../Users/UserCard.module.css';

let UserCard = (props) => {

  let followClick = () => {
    props.follows(props.id)
  }
  let unfollowClick = () => {
    props.unfollows(props.id)
  }

    return (
      <div className={styles.wrapper}>
          <div className={styles.description}>
            <img
              className={styles.photo}
              src={props.photoURL}
              alt="User"
              width="40"
              height="40"
            />
            <h2 className={styles.name}>{props.userName}</h2>
          <p className={styles.text}>{props.about}</p>
        </div>
        <div className={styles.buttonSet}>
          {props.followed
            ? <button className="button" onClick={unfollowClick}>Unfollow</button>
            : <button className="button" onClick={followClick}>Follow</button> }
        </div>
      </div>
    );
};

export default UserCard;