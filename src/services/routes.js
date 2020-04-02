import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// import all pages

export const fullAccess = (
    <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
    </Switch>
);

export const unAuthorized = (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Redirect to="/login" />
    </Switch>
  )