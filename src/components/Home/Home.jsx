
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (<div className='home-container'>
   
      <h1>Home</h1> 
      <div className="buttons-container">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
