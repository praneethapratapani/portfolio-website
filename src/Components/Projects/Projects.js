import React from 'react';
import FlipCard from './FlipCards';
//import './Projects/FlipCards.scss';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DocConnect - Connect,Consult,Care',
      description: 'An innovative app designed to simplify healthcare access',
      link: 'https://github.com/praneethapratapani/DocConnect',
      icon: "/assets/docConnect.png",
      variant: "click"
    },
    {
      id:2,
      title: 'Mini Sephora Database',
      description: 'A robust system designed to manage products, customers, orders, reviews, and promotions for a Sephora store',
      link: 'https://github.com/yourusername/project2',
      icon: "/assets/Sephora.png",
      variant: "click"
    },
    // Add more projects as needed
  ];

  return (
    <div className='page2Class page2'>
    <div className="cardsBody">
    <div className="cardsContainer">
      <div className="row h-100">
        <div className = "cardStyle">
          {projects.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Projects;
