import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Parent from '../pages/parent'
import Index from '../pages/index'

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/parentson" component={Parent} />

        </Switch>
    )
}