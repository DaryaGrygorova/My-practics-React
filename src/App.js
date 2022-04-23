import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <img src="./logo192.png" className="logo" alt="logo" with="40" height="40" />
        <h1>BabaGram</h1>
      </header>
      <aside className="sidebar">
        <nav className="nav">
          <ul className="nav__list list">
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
        <div className="settings">
          <a className="nav__link" href="" target="_blank" rel="noopener noreferrer">
            Settings
          </a>
        </div>
      </aside>
      <main className="content">
        <img
          src="https://interier-foto.ru/wp-content/uploads/2014/11/severo-chujskij-hrebet6393.jpg"
          alt="banner image"
          with="1200"
          height="300"
        />
        <div className="user__about">
          <img src="./logo192.png" className="user__foto" alt="User foto" with="260" height="250" />
          <div className="user__description">John Docker</div>
        </div>
          <div className="New-post">
          <h2 className='New-post__title'>My Post</h2>
          <input className='New-post__input'/>
          <button className='New-post button button' type='button'>Send</button>
          </div>
        <div className="user__content">
<div>Post1</div>
<div>Post2</div>
<div>Post3</div>
        </div>


      </main>
      <footer className="footer"></footer>
    </div>
  );
};

export default App;
