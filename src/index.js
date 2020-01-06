import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store';
import './App.css';
import './Card.css';

ReactDOM.render(<App />, document.getElementById('root'));

console.log(STORE.lists[0].cardIds);
