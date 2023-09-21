
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { UserContext } from "../../context/userContext";
import { useContext } from 'react';

function Home() {

  const { loggedUser } = useContext(UserContext);



  return (<div className='home-container'>

    <video autoPlay loop muted className='weddingvideo' src=".\src\assets\Untitled video - Made with Clipchamp (1).mp4" ></video>
    <div class="header"><h2>{loggedUser.username && "WELCOME " + loggedUser.username}</h2>
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
    <br />

    <br />
    <hr />
    <div className='container1'>
      <div className='webimg1'>
        <img src=".\src\assets\צילום מסך 2023-09-19 160800.png" alt="" />
      </div>
      <div className='webtext1'>
        <h4>Wedding Planning Services</h4>
        <p>

          Begin your journey to a dream wedding with our exceptional wedding planning services. We specialize in turning your wedding dreams into a reality, ensuring every detail is meticulously planned and executed to perfection. From elegant venues to stunning floral arrangements, trust us to create a memorable and magical wedding day that reflects your unique love story.</p>
        <br />
        <h4>Venue Selection</h4>
        <p>

          Discover the perfect backdrop for your love story with our curated selection of exquisite wedding venues. Whether you envision a romantic beachfront ceremony, a charming garden celebration, or a grand ballroom affair, our team will help you find the ideal setting that suits your style and vision.</p>
      </div>
    </div>
    <hr />
    <div className='container2'>
      <div className='webtex2'>
        <h4>Customized Packages</h4>
        <p>

          At Happily ever after, we understand that every couple is unique. That's why we offer customizable wedding packages tailored to your specific needs and preferences. Whether you need full-service planning or day-of coordination, we have the perfect package for you.</p>
        <br />
        <h4>
          Let Us Make Your Wedding Dreams Come True
        </h4>
        <p>

          Trust Happily ever after to make your wedding day unforgettable. Our passion for creating beautiful, meaningful weddings shines through in every detail. Contact us today to begin the journey towards the wedding of your dreams.</p>
      </div>
      <div className='webimg2'>
        <img src=".\src\assets\צילום מסך 2023-09-19 160913.png" alt="" />
      </div>
    </div>
    <hr />
    <div className='marquee-container'>
      <p className="marquee">YOU CHOOSE / WE MAKE IT COME TRUE / YOU CHOOSE / WE MAKE IT COME TRUE / YOU CHOOSE / WE MAKE IT COME TRUE / YOU CHOOSE / WE MAKE IT COME TRUE /</p>
    </div>
    <br />
    <div className='bigDiv'>
      <div className='Card'>
      <img className='cardImg' src=".\src\assets\צילום מסך 2023-09-20 134617.png" alt="" />

        <div className='alltext'>
          <div className='koteret'>
Communication
          </div>
          <p className='kituv'>
          Celebrate love with us every step of the way! Together, we'll piece together every element of your dream wedding, and create an unforgettable production! 
          </p>
        </div>
      </div>
      <div className='Card'>
        <div className='alltext'>
        <img className='cardImg' src=".\src\assets\צילום מסך 2023-09-20 134657.png" alt="" />

          <div className='koteret'>
The little detals..
          </div>
          <p className='kituv'>
          Elevate every aspect of your special day, from meticulously crafting the perfect menu and handpicking the ideal suppliers tailored just for you.
          </p>
        </div>
      </div>
      <div className='Card'>
        <img className='cardImg' src=".\src\assets\צילום מסך 2023-09-21 114457.png" alt="" />

        <div className='alltext'>
          <div className='koteret'>
          Exceptional staff
          </div>
          <p className='kituv'>
          Our accomplished staff brings a wealth of expertise to the table, ensuring every task is executed flawlessly. you will be guided by seasoned professionals who excelence at what they do.
          </p>
        </div>
      </div>
      <div className='Card'>
        <div className='alltext'>
      <img className='cardImg' src=".\src\assets\צילום מסך 2023-09-20 134725.png" alt="" />

          <div className='koteret'>
Discover Your Dream Venue
          </div>
          <p className='kituv'>
          
Selecting the perfect venue is a crucial step in creating your dream event. Our team is here to guide you through an array of stunning locations, helping you find the ideal setting.
          </p>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <hr />


    <div>
      <div> 
        <div>
          <div>
            <img src=".\src\assets\icons\website-icon.png" alt="" />
          </div>
          <div>
            <img src=".\src\assets\icons\website-icon2.png" alt="" />
          </div>
        </div>
        <div>
          <div>help</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div>account</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
       
      </div>
    </div>







  </div>
  );
}

export default Home;
