import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I am dedicated to leveraging my skills and expertise to develop innovative and impactful software solutions. With a focus on quality, creativity, and collaboration, I strive to exceed client expectations and contribute to the advancement of technology. My mission is to create user-centric applications that solve real-world problems, enhance user experiences, and drive positive change in the digital landscape.</p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
};

export default Home;
