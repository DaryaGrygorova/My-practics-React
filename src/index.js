import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let PostsData = [
  {id: 1, name: 'Sara Connor', message: 'Hi, world!', time: '14:48', likeCounter: 15},
  {id: 2, name: 'Sara Connor', message: 'It\'s my first post', time: '14:55', likeCounter: 5},
  {id: 3, name: 'Sara Connor', message: 'How are you?', time: '14:58', likeCounter: 7},
];

let ContactsData = [
  { name: 'Sara Connor', id: 'Connor'},
  { name: 'Lisa Fahrenheit', id: 'Fahrenheit'},
  { name: 'Rose Friedman', id: 'Friedman'},
  { name: 'Frank Sinatra', id: 'Sinatra'},
  { name: 'John Silver', id: 'Silver'},
  { name: 'Tomas Fisher', id: 'Fisher'},
  { name: 'Lili Walker', id: 'Walker'},
];

let MessData = [
  {id: 1, message: 'Hello!',  name: 'Frank Sinatra', time: '15:20'},
  {id: 2, message: 'It\'s my first private chat',  name: 'Frank Sinatra', time: '15:21'},
  {id: 3, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:21'},
  {id: 4, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:22'},
  {id: 5, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:22'},
  {id: 6, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:22'},
  {id: 7, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:22'},
  {id: 8, message: 'It\'s my first message!',  name: 'Frank Sinatra', time: '15:22'},
  {id: 9, message: 'HaHaHa!!! I like it!!',  name: 'Frank Sinatra', time: '15:24'},
];






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  PostsData={ PostsData } ContactsData={ ContactsData } MessData={ MessData } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
