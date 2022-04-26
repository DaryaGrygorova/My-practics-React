import styles from './sidebar.module.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
       <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
              <Link className={styles.link} to="/profile" >
                Profile
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/dialogs" >
                Messages
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/news" >
                News
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/music" >
                Music
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.settings}>
          <Link className={`${styles.link} ${styles.linkNoBorder}`} to="/settings" target="_blank" rel="noopener noreferrer">
            Settings
          </Link>
        </div>
      </aside>
  );
};


export default Sidebar;
