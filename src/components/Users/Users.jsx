import styles from './Users.module.css';
import userPhoto from '../images/customer_person_people_man.png';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../API/API';

function Users (props) {
  let pageCount = Math.ceil((props.UsersCount / props.PageSize));

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
         <div className={styles.container}>
       { props.Users.map ( Card => <div key={Card.id}>
      <div className={styles.wrapper} >
        <NavLink to={'/profile/' + Card.id} className={styles.description}>
          <img
            className={styles.photo}
            src={Card.photos.small != null ? Card.photos.small : userPhoto}
            alt="User"
            width="40"
            height="40"
          />
          <h2 className={styles.name}>{Card.name}</h2>
          <p className={styles.text}>{Card.status}</p>
          </ NavLink>
        <div className={styles.buttonSet}>
          {Card.followed
            ? <button className="button" disabled={props.isFollowingInProgress.some(id => id === Card.id)}
                      onClick={() => {
              props.toggleIsFollowingInProgress(true, Card.id)
              userAPI.getUnfollow (Card.id)
                .then(data => {
                  props.toggleIsFollowingInProgress(false, Card.id)
                  if (data.resultCode === 0) {
                    props.unfollows(Card.id);}; })
               }
            } >Unfollow</button>
            : <button className="button" disabled={props.isFollowingInProgress.some(id => id === Card.id)}
                      onClick={() => {
              props.toggleIsFollowingInProgress(true, Card.id)
              userAPI.getFollow (Card.id)
                .then(data => {
                  props.toggleIsFollowingInProgress(false, Card.id)
                  if (data.resultCode === 0) {
                    props.follows(Card.id) ;}; })
            }
            } >Follow</button> }
        </div>
      </div>
    </div>)}
       <ul className={styles.pageNumbList}>
         { pages.map ( p => {
           return (
             p <= 20 &&
             <li className={styles.pageNumb}><span onClick={() => {props.onPageChanged(p)}} className={props.CurrentPage === p ? styles.selected : ''}>{p}</span></li>
           ) })}
          <li className={styles.pageNumb}><span>...</span></li>
       </ul>
    <button className="button" >Show more</button>
  </div>
);}

export default Users;