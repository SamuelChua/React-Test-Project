import React from 'react';
import logo from '../logo.svg';
// import pp from '../Icon_hands.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2 className ="text">Welcome to my website!</h2>
      <Link to="/form" className ="link">Go to form page</Link>
    </div>
  );
}

export default Home;
