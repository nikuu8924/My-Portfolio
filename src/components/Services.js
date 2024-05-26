import React from 'react';
import './Services.css';
import webdevImage from '../asset/service1.jpeg'; 
import mobileImage from '../asset/service2.jpeg';
import uiuxImage from '../asset/service3.jpeg';

const Services = () => {
  const services = [
    { 
      title: 'Web Development', 
      description: 'Crafting responsive, user-friendly websites tailored to your needs. From simple landing pages to complex web applications, I deliver high-quality solutions using the latest web technologies.', 
      image: webdevImage 
    },
    { 
      title: 'Mobile Development', 
      description: 'Building innovative mobile applications for iOS and Android platforms. Whether you need a native app or cross-platform solution, I create engaging experiences to connect with your audience on the go.', 
      image: mobileImage 
    },
    { 
      title: 'UI/UX Design', 
      description: 'Designing intuitive and visually appealing user interfaces that enhance user experience. I focus on creating seamless interactions and eye-catching designs to captivate and retain your audience.', 
      image: uiuxImage 
    },
  ];

  return (
    <div className="services">
      <h1>Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
