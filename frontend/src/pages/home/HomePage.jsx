import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <div className="home-container">
        <h1 className="intro intro-title">Yoel B. Buzgalo</h1>
        <p className="intro intro-text">
          Practical Electrical Engineer & Software Developer Student
        </p>
        <img
          src="images/intro_image.JPG"
          alt="picture of me"
          className="intro intro-image"
        />
        <p className="intro intro-text">Welcome to my site!</p>
        <p className="intro intro-text">
          Are you ready to dive in and learn all about me?
        </p>
        <button className="intro-button">V</button>
      </div>
    </div>
  );
}

export default HomePage;
