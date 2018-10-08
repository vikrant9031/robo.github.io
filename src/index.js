import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import './robo.css';
import App from './Apps';

ReactDOM.render(
	<App/>
	 ,document.getElementById('root'));
registerServiceWorker();
