import './App.css';
import './App.css';
import Header from './components/header.jsx';
import Sidebar from './components/sidebar.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
