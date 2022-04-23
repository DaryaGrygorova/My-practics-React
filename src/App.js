import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <img src=".././public/logo192.png" className="logo" alt="logo" with="40" height="40" />
      </header>
      <aside className="sidebar">
          <nav className="nav">
          <ul className="nav__list list">
            <li className="nav__item">
              <a className="nav__link" href="" target="_blank" rel="noopener noreferrer">
                Learn html/css
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="" target="_blank" rel="noopener noreferrer">
                Learn js
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="" target="_blank" rel="noopener noreferrer">
                Learn React
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className='content'>
      </main>
      <footer className='footer'>
      </footer>
    </div>
  );
};

export default App;
