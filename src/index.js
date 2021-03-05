import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';



// Allow webpack HotModuleReplacement
if (module.hot) module.hot.accept();

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();  // Runs register() as default function

