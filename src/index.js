import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


// ReactDOM.render(<Card/>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
