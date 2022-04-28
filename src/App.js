import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './components/startPage/startPage';





const App = (props) => {
  return (
    <BrowserRouter>
    <div className="App-wrapper">
      <Header />
      <div className="main-container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/profile/*' element={<Profile PostsData={props.PostsData} />} />
          <Route path='/dialogs/*' element={<Dialogs ContactsData={props.ContactsData} MessData={props.MessData}/>} />
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
    </BrowserRouter>
  );
};

export default App;
