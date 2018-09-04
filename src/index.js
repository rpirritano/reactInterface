import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import './wisdompetlogo.svg'
import MainInterface from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));
registerServiceWorker();
