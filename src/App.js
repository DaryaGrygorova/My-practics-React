import './App.css';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';

const App = () => {
  return (
    <div className="App-wrapper">
      <Header />
      <div className="main-container">
        <Sidebar />
        {/* <Profile name="Jolly Docker" about="Pretty ukrainian lady" /> */}
        <Dialogs />
      </div>
    </div>
  );
};

export default App;
