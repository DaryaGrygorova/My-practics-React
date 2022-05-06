import styles from "./header.module.css"
import { NavLink } from 'react-router-dom';
import PrettyLady from '../images/PrettyLady.webp'
import Logo1 from '../images/Logo1.png'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className="logo">
          <img
            className="logo__img"
            src={Logo1}
            alt="logo"
            width="40"
            height="40"
          />
          <span className="logo__text">BabaGram</span>
        </div>
        <div className={styles.wrapper}>
          {props.isAuth
            ?
         <NavLink to={'/profile/' + props.UserID}>
            <img
              className={styles.photo}
              src={PrettyLady}
              alt='User'
              width="40"
              height="40"
            />
          </NavLink>
            : <NavLink to={'/auth/' }><button className="button">Log In</button></NavLink>}
        </div>
      </div>
    </header>
  );
};

export default Header;
