import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import FilmsList from './containers/FilmsList/FilmsList';
import Film from './containers/Film/Film';

function App() {

  let routes = (
    <Switch>
    <Route path="/film/:id" component={Film}/>
    <Route path="/" component={FilmsList}/>
  </Switch>
  )


  return (
    <div>
      {routes}
    </div>
  );
}

export default connect(null)(App);
