import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import * as components from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <components.Header />
        <components.Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={components.Profile} />
          <Route path="/dialogs"component={components.Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
