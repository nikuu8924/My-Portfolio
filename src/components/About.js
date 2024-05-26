import React from 'react';
import './About.css';
import profilePic from '../asset/my_img.jpg';



 

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <img src={profilePic} alt="Profile" />
      <p>Hello! My name is Nikita Sherasiya. I am 22 years old and recently graduated with a Bachelor's degree in Computer Engineering from Gujrat Technical University in India. Currently, I am enrolled in a Software Engineering Technology program to further enhance my skills and knowledge in the field.</p>
      <a href="/Nikita_resume_print.pdf" download="Nikita_resume_print.pdf">
        Download My Resume
      </a>
    </div>
  );
};

export default About;
