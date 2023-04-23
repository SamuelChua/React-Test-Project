import React from 'react';
import { Link } from 'react-router-dom';
import APIData from '../APIData/APIData';

function Home() {
  return (
    <div className='home-container'>
      <h2 className ="text">Welcome to my website!</h2>
      <Link to="/form" className ="link">Go to form page</Link>
      <Link to="/APIData">API Call</Link>
    </div>
  );
}

export default Home;
