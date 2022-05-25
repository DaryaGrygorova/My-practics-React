import './App.css';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './components/startPage/startPage';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="App-wrapper">
      <HeaderContainer />
      <div className="main-container">
        <Sidebar />
        <div className="content">
        <Routes>
          <Route path='/'
                 element={<StartPage />} />
          <Route path='/profile/:userID'
                 element={<ProfileContainer />} />
          <Route path='/dialogs/*'
                 element={<DialogsContainer />} />
          <Route path='/users/*'
                 element={<UsersContainer />} />
          <Route path='/login/*'
                 element={<Login />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>}
          />
        </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
