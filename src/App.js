import React from 'react';
import './App.css';
import * as components from './components';

const App = () => {
  return (
    <div className='app-wrapper'>
      <components.Header />
      <components.Content />
      <components.Navbar />
    </div>

  );
}

export default App;
