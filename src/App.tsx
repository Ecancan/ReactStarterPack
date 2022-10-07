import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from './views/layouts/MainLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={MainLayout} />
      </Switch>
    </Router>
  );
}

export default App;
