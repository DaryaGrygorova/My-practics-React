import React from 'react';
import styles from './Users.module.css';
import Paginator from '../../common/paginator/paginator';
import User from './User';

const Users = props => {
  return (
    <div className={styles.container}>
      {props.Users.map(user => (
        <User
          key={User.id}
          user={user}
          isFollowingInProgress={props.isFollowingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
      <Paginator
        UsersCount={props.UsersCount}
        PageSize={props.PageSize}
        onPageChanged={props.onPageChanged}
        CurrentPage={props.CurrentPage}
      />
      <button className="button">Show more</button>
    </div>
  );
};

export default Users;
