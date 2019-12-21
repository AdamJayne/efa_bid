import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {
    Home,
    Learning,
    Instruction,
    Curriculum,
    NotFound,
    Experience
} from './Views';
import Navbar from './components/Navbar';


class App extends Component {
    render () {
        return (
            <div>
                <HashRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path="/learning" component={Learning} />
                        <Route exact path="/instruction" component={Instruction} />
                        <Route exact path="/curriculum" component={Curriculum} />
                        <Route exact path="/experience" component={Experience} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/**" component={NotFound} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("content"));