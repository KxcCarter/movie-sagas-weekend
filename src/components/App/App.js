import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

// --- custom components ---

import MovieList from '../pages/MovieList/MovieList';
import { Container } from '@material-ui/core';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import EditMovie from '../pages/EditMovie/EditMovie';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <Container maxWidth="md">
          <Header />

          <Route exact path="/" component={MovieList}></Route>
          <Route path="/details/:id" component={MovieDetails}></Route>
          <Route path="/edit/:id" component={EditMovie}></Route>
        </Container>
      </Router>
    );
  }
}

export default connect()(App);
