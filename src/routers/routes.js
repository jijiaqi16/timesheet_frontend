import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../container/Home'
import Employee from '../container/Employee'
import Auth from '../container/Auth'
import Setting from '../container/Setting'


//user router authoirzation





const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/employee" component={Employee} exact />
            <Route path="/login" component={Auth} exact />
            <Route path="/setting" component={Setting} exact />
        </Switch>
    )
}

export default Routes