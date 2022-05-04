import styles from './User.module.css';

let Users = (props) => {
debugger;
  if (props.Users.length === 0) {
   props.setUsers([
      { id: 1, followed: true, userName: 'Jolly Docker', about: 'Pretty lady', photoURL: 'https://cdn.icon-icons.com/icons2/11/PNG/256/customer_person_people_woman_you_1627.png' },
      { id: 2, followed: false, userName: 'Sara Connor', about: 'Astronaut', photoURL: 'https://cdn.icon-icons.com/icons2/11/PNG/256/customer_person_people_woman_you_1627.png ' },
      { id: 3, followed: false, userName: 'Lisa Fahrenheit', about: 'Candy - it\'s my love', photoURL: 'https://cdn.icon-icons.com/icons2/11/PNG/256/customer_person_people_woman_you_1627.png ' },
      { id: 4, followed: true, userName: 'Rose Friedman', about: 'Girl with funny nose', photoURL: 'https://cdn.icon-icons.com/icons2/11/PNG/256/customer_person_people_woman_you_1627.png' },
      { id: 5, followed: false, userName: 'Frank Sinatra', about: 'Music - it\'s all...', photoURL: 'https://ru.seaicons.com/wp-content/uploads/2016/04/user-icon.png ' },
      { id: 6, followed: false, userName: 'John Silver', about: 'Freelancer', photoURL: 'https://ru.seaicons.com/wp-content/uploads/2016/04/user-icon.png ' },
      { id: 7, followed: true, userName: 'Tomas Fisher', about: 'ChokoBanny', photoURL: 'https://ru.seaicons.com/wp-content/uploads/2016/04/user-icon.png ' },
      { id: 8, followed: true, userName: 'Lili Walker', about: 'My little world', photoURL: 'https://cdn.icon-icons.com/icons2/11/PNG/256/customer_person_people_woman_you_1627.png ' }
    ])};

  return (
    <div className={styles.container}>
      { props.Users.map ( Card => <div key={Card.id}>
        <div className={styles.wrapper} >
          <div className={styles.description}>
            <img
              className={styles.photo}
              src={Card.photoURL}
              alt="User"
              width="40"
              height="40"
            />
            <h2 className={styles.name}>{Card.userName}</h2>
            <p className={styles.text}>{Card.about}</p>
          </div>
          <div className={styles.buttonSet}>
            {props.followed
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