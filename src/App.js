import React from 'react';
import './App.css';
import Welcome from './components/Main/Welcome';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  return (
    <div className="">
      <NavBar />
      {<Welcome />}
    </div>
  );
}

export default App;
