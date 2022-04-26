import styles from "./header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className="logo">
          <img
            className="logo__img"
            src="https://w7.pngwing.com/pngs/834/679/png-transparent-computer-icons-woman-user-old-age-grandma-purple-violet-people-thumbnail.png"
            alt="logo"
            width="40"
            height="40"
          />
          <span className="logo__text">BabaGram</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
