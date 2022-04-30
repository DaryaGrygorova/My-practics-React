import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import State from './Redux/State';
import App from './App';
import { subscribe, addMess, addPost, updateNewPostText, updateNewMessText } from './Redux/State';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App State={State}
           addPost={addPost}
           addMess ={addMess}
           updateNewPostText={updateNewPostText}
           updateNewMessText={updateNewMessText}/>
    </React.StrictMode>
  );

let rerenderEntireTree = (State) => {
  root.render(
    <React.StrictMode>
      <App State={State}
           addPost={addPost}
           addMess ={addMess}
           updateNewPostText={updateNewPostText}
           updateNewMessText={updateNewMessText}/>
    </React.StrictMode>
  );
};

subscribe (rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


