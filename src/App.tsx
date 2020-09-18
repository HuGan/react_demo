import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { store } from './reducers';
import Routers from './routers'

import './App.css';
const history = createBrowserHistory()

function App() {

  return (
    <div className="App">
    <Provider store={store}>
      <Router history={history}>
        <Routers/>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
