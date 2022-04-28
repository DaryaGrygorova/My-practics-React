import reportWebVitals from './reportWebVitals';
import State from './Redux/State';
import { rerenderEntireTree } from './Render';


rerenderEntireTree(State);

reportWebVitals();

