import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../images/customer_person_people_man.png'

let Users = (props) => {
  if (props.Users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then (response => { props.setUsers(response.data.items)} )};

  return (
    <div className={styles.container}>
      { props.Users.map ( Card => <div key={Card.id}>
        <div className={styles.wrapper} >
          <div className={styles.description}>
            <img
              className={styles.photo}
              src={Card.photos.small != null ? Card.photos.small : userPhoto}
              alt="User"
              width="40"
              height="40"
            />
            <h2 className={styles.name}>{Card.name}</h2>
            <p className={styles.text}>{Card.status}</p>
          </div>
          <div className={styles.buttonSet}>
            {Card.followed
              ? <button className="button" onClick={() => { props.unfollows(Card.id) } }>Unfollow</button>
              : <button className="button" onClick={() => { props.follows(Card.id) } }>Follow</button> }
          </div>
        </div>
      </div>)
      }
      <button className="button" >
        Show more
      </button>
    </div>
  )

}
export default Users;