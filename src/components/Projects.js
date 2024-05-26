import React from 'react';
import './Projects.css';
import image1 from '../asset/project1.jpeg'
import image2 from '../asset/project2.jpeg';
import image3 from '../asset/project3.jpeg';

const Projects = () => {
  const projects = [
    {
      name: 'Weather Forecast Web Application',
      description: 'Developed a web application that provides real-time weather forecasts and historical weather data using Node.js, Express.js, and React.js. The application integrates with third-party APIs to deliver accurate and up-to-date weather information.',
      role: 'Full Stack Developer',
      outcome: 'The application was recognized for its user-friendly interface and reliability, attracting over 5,000 daily users. It was particularly praised for its detailed weather analytics and visually appealing design.',
      image: image1,
    },
    {
      name: 'Educational Mobile App for Learning Languages',
      description: 'Created an educational mobile application using React Native aimed at helping users learn new languages through interactive lessons, quizzes, and flashcards. The app supports multiple languages and tracks user progress.',
      role: 'Mobile App Developer',
      outcome: 'The app garnered positive reviews for its engaging content and effective learning tools, achieving over 15,000 downloads within the first three months. Users appreciated the apps personalized learning paths and interactive features.',
      image: image2,
    },
    {
      name: 'Real-Time Stock Trading Platform',
      description: 'Built a real-time stock trading platform using C++ for the backend to handle high-frequency trading operations, and a React.js front-end for a responsive user interface. The platform includes features such as live stock data, trading analytics, and portfolio management.',
      role: 'Software Developer',
      outcome: 'The platform successfully handled thousands of transactions per second with minimal latency, attracting a user base of over 2,000 active traders. It was commended for its robust performance, security features, and intuitive design.',
      image: image3,
    },
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p className="description">{project.description}</p>
            <p className="description"><strong>Role:</strong> <span className="left-align">{project.role}</span></p>
            <p className="description"><strong>Outcome:</strong> <span className="left-align">{project.outcome}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
