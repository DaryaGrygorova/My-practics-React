import UserCard from './UserCard';
import styles from './UserCard.module.css';

let Users = (props) => {
  let UsersElements = props.Users.map ( Card => <UserCard key={Card.id} id={Card.id} photoURL={Card.photoURL} followed={Card.followed} userName={Card.userName} about={Card.about} follows={props.follows} unfollows={props.unfollows}/> );
  return (
    <div className={styles.container}>
        { UsersElements }
      <button className="button" >
        Show more
      </button>
    </div>
  )
}

export default Users;