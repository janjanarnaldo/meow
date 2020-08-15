import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Homepage from './containers/Homepage/Homepage';
import CatDetails from './containers/CatDetails/CatDetails';

function App() {
  return (
    <div className="App container">
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/:catId" component={CatDetails} />
      </Router>
    </div>
  );
}

export default App;
