import React, { useState } from 'react';
import './App.css';
import { Router } from '@reach/router';
import People from './components/People';
import Planets from './components/Planets';
import Search from './components/Search';
import ErrorPage from './components/ErrorPage';


function App() {
  
  return (
    <div className="App">
      <Search />
      <Router>
        <People path='/people/:id' />
        <Planets path ='/planets/:id' />
        <ErrorPage path = '/error' />
      </Router>

    </div>
  );
}

export default App;
