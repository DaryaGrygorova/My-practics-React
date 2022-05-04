import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './Redux/Store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App State={store.getState()}
           dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );

let rerenderEntireTree = (State) => {
  root.render(
    <React.StrictMode>
      <App State={State}
           dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};

store.subscribe (rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


