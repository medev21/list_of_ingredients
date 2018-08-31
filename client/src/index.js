import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.css'

ReactDOM.render(<App />, document.getElementById('root'));



//these were removed because serviceworker clashes w/ Rails' routing
// and can leave you unable to access ActiveAdmin
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
