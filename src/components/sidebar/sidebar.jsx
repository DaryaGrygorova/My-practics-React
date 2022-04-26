import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
       <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
              <a className={`${styles.link} ${styles.current}`} href="/profile" >
                Profile
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/dialogs" >
                Messages
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/news" >
                News
              </a>
            </li>
            <li className={styles.item}>
              <a className={styles.link} href="/music" >
                Music
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.settings}>
          <a className={`${styles.link} ${styles.linkNoBorder}`} href="#s" target="_blank" rel="noopener noreferrer">
            Settings
          </a>
        </div>
      </aside>
  );
};


export default Sidebar;
