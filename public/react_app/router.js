import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Views/Home';

export default (
    <HashRouter>
        <div>
            <Route path="/" component={Home} />
        </div>
    </HashRouter>
)