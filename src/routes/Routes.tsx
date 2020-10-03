import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  )
}
