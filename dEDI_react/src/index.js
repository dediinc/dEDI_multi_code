import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Login from './views/login'
import CreateOrg from './views/create_org'
import CreateUser from './views/create_user'
import Forms from './views/forms'
import Dashboard from './views/dashboard'
import Messages from './views/messages'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Login} path="/" />
        <Route exact component={CreateOrg} path="/create_org" />
        <Route exact component={CreateUser} path="/create_user" />
        <Route exact component={Forms} path="/forms" />
        <Route exact component={Dashboard} path="/dashboard" />
        <Route exact component={Messages} path="/messages" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
