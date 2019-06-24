import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home';
import About from './components/About/About';
import Student from './components/Student/Student';
import ClassList from './components/ClassList/ClassList';

export default function Routes() {
    return (
      <Switch>
        <Route exact component={Home} path="/" />
        <Route component={About} path="/about" />
        <Route component={Student} path="/student/:id" />
        <Route component={ClassList} path="/classlist/:class" />
      </Switch>
    );
  }