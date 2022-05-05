import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './components/startPage/startPage';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/profile/profileContainer';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="App-wrapper">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content">
        <Routes>
          <Route path='/'
                 element={<StartPage />} />
          <Route path='/profile/*'
                 element={<ProfileContainer />} />
          <Route path='/dialogs/*'
                 element={<DialogsContainer />} />
          <Route path='/users/*'
                 element={<UsersContainer />} />
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
