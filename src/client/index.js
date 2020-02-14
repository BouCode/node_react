import React from 'react';
import { render } from 'react-dom';

import './style/style.css';

const App = () => {
    return (
        <h1>
        Hola mundo desde React
        </h1>
    )
};

render (
    <App/>, document.getElementById ('app')
)