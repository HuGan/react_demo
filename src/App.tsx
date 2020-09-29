import React from 'react';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Routers from './routers'

import './App.css';
const history = createBrowserHistory()

function App() {

  return (
    <div className="App">
      <Router history={history}>
        <Routers />
      </Router>
    </div>
  );
}

export default App;
