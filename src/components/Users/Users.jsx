import React  from 'react';
import styles from './Users.module.css';
import axios from 'axios';
import userPhoto from '../images/customer_person_people_man.png'

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.CurrentPage}&count=${this.props.PageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumb) => {
    this.props.setCurrentPage(pageNumb);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumb}&count=${this.props.PageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
   let pageCount = Math.ceil((this.props.UsersCount / this.props.PageSize));

   let pages = [];
   for (let i=1; i <= pageCount; i++) {
       pages.push (i);
   }

   return ( <div className={styles.container}>
       { this.props.Users.map ( Card => <div key={Card.id}>
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
            ? <button className="button" onClick={() => { this.props.unfollows(Card.id) } }>Unfollow</button>
            : <button className="button" onClick={() => { this.props.follows(Card.id) } }>Follow</button> }
        </div>
      </div>
    </div>)
    }
       <ul className={styles.pageNumbList}>
         { pages.map ( p => {
           return (
           (p <= 7)
             && <li className={styles.pageNumb}><span onClick={() => {this.onPageChanged(p)}} className={this.props.CurrentPage === p ? styles.selected : ''}>{p}</span></li>
           ); })}
         <li className={styles.pageNumb}><span>...</span></li>
       </ul>
    <button className="button" >Show more</button>
  </div>
   )
  }
}

export default Users;