import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './wisdompetlogo.svg'
import MainInterface from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));
registerServiceWorker();
