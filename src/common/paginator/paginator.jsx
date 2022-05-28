import React from 'react';
import styles from './paginator.module.css';

function Paginator (props) {
  let pageCount = Math.ceil((props.UsersCount / props.PageSize));

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
       <ul className={styles.pageNumbList}>
         { pages.map ( p => {
           return (
             p <= 20 &&
             <li className={styles.pageNumb}><span onClick={() => {props.onPageChanged(p)}} className={props.CurrentPage === p ? styles.selected : ''}>{p}</span></li>
           ) })}
          <li className={styles.pageNumb}><span>...</span></li>
       </ul>
);}

export default Paginator;