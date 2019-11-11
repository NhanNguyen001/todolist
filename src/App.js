import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/layout/header.component';
import HomePage from './components/pages/home/home.component';
import AboutPage from './components/pages/about/about.component';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
      </Switch>
    </div>
  );
};

export default App;
