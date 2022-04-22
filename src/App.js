import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h>Новая фишка</h>
     <ul className="list">
       <li className="list__item list__item--color">Изменение цвета</li>
       <li className="list__item list__item--inline">Строчный єлемент</li>
       <li className="list__item list__item--big-size">Изменение шрифта</li>
       </ul>
    </div>
  );
}

export default App;
