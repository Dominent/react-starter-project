import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

require('./style.scss');
require('bootstrap/dist/css/bootstrap.min.css')

ReactDOM.render(
    <App />,
    document.getElementById('root')
);