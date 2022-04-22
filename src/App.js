import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
     <h>Новая фишка</h>
     <ul className="list">
       <li className="list__item list__item--color">Изменение цвета</li>
       <li className="list__item list__item--inline">Строчный єлемент</li>
       <li className="list__item list__item--big-size">Изменение шрифта</li>
       </ul>
    </div>
  );
}

const Header = () => {
  return (
    <div className="Header">
     <ul className="nav-list list">
       <li className="nav-list__item">
         <a href="" className='nav-list__link'>Home</a></li>
       <li className="nav-list__item">
         <a href="" className='nav-list__link'>Library</a></li>
       <li className="nav-list__item">
         <a href="" className='nav-list__link'>Contacts</a></li>
       </ul>
    </div>
  );
}

export default App;
