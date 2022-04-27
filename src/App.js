import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './startPage/startPage';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App-wrapper">
      <Header />
      <div className="main-container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/profile/*' element={<Profile name='Jolly Docker' about='Pretty ukrainian lady' />} />
          <Route path='/dialogs/*' element={<Dialogs />} />
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
