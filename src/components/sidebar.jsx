const Sidebar = () => {
  return (
          <aside className="sidebar">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="" target="_blank" rel="noopener noreferrer">
                Profile
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="" target="_blank" rel="noopener noreferrer">
                Messages
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="" target="_blank" rel="noopener noreferrer">
                News
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="" target="_blank" rel="noopener noreferrer">
                Music
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav__settings">
          <a className="nav__link nav__link--no-border" href="" target="_blank" rel="noopener noreferrer">
            Settings
          </a>
        </div>
      </aside>
  );
};


export default Sidebar;
