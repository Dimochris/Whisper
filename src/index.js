import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AuthProvider from './contexts/AuthProvider';

import './index.css';

const Root = (
    <AuthProvider>
        <App />
    </AuthProvider>
)

ReactDOM.render(Root, document.getElementById('root'));

registerServiceWorker();
