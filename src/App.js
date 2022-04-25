import './App.css';
import './App.css';
import Header from './components/header.jsx';
import Sidebar from './components/sidebar.jsx';
import Profile from './components/profile.jsx';

const App = () => {
  return (
    <div className="App-wrapper">
      <Header />
      <div className="main-container">
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
};

export default App;
