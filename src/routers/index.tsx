import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/home';
import Home2 from '../pages/home2';

export default () => {
    return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/h2" component={Home2} />
    </Switch>
    )
}