import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import PersonalWebsite from './PersonalWebsite';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PersonalWebsite />, document.getElementById('root'));
registerServiceWorker();
