import React from 'react';
import logo from './images/home.jpg';
import './App.css';
import MainHeader from './components/MainHeader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main';
import ManagePlate from './components/ManagePlate';

function App() {
  return (
    <Router>
      <MainHeader></MainHeader>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/manageplate">
          <ManagePlate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
