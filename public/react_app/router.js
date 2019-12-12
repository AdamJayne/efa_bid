import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import LifelongLearning from './Views/LifelongLearning';
import NotFound from './Views/NotFound';

export default (
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/learning" component={LifelongLearning} />
                <Route exact path="/" component={Home} />
                <Route exact path="/**" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>
)