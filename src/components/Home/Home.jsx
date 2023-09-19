
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { UserContext } from "../../context/userContext";
import { useContext } from 'react';

function Home() {

  const { loggedUser } = useContext(UserContext);



  return (<div className='home-container'>

    <video autoPlay loop className='weddingvideo' src=".\src\assets\Untitled video - Made with Clipchamp (1).mp4" ></video>
   <div class="header"><h2>WELCOME</h2>
      <h5 >Let's make your dream come true!</h5>
    </div>
    
   
    <div className="buttons-container">
      <Link to="/login">
        <button className='logbtn'>Login</button>
      </Link>
      <Link to="/register">
        <button className='registerbtn'>Register</button>
      </Link>
    </div>
    <h1>{loggedUser.username && "hello " + loggedUser.username}</h1>


  </div>
  );
}

export default Home;
