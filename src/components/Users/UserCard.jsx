import styles from '../Users/UserCard.module.css';

let UserCard = (props) => {
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
            ? <button className="button" onClick={props.unfollow(props.id)}>Unfollow</button>
            : <button className="button" onClick={props.follow(props.id)}>Follow</button> }
        </div>
      </div>
    );
};

export default UserCard;