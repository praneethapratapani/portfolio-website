import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'DocConnect - Connect,Consult,Care',
      description: 'An innovative app designed to simplify healthcare access. DocConnect provides users with comprehensive information on nearby hospitals and doctors, facilitates online appointment bookings and consultations, and ensures secure storage and access to medical records. Our project focused on creating an intuitive user interface, real-time data synchronization, and robust data security to enhance patient engagement and healthcare accessibility. This project sharpened my skills in Android development, UI/UX design, and database management.',
      link: 'https://github.com/praneethapratapani/DocConnect'
    },
    {
      title: 'Mini Sephora Database',
      description: 'A robust system designed to manage products, customers, orders, reviews, and promotions for a Sephora store. This project involved designing and implementing a database with efficient data storage and management capabilities, ensuring seamless product management, customer interaction, and order processing. Through this experience, I enhanced my skills in database design, SQL, and data integrity enforcement, contributing to the creation of a reliable and scalable retail management system.I played a crucial role in developing the Mini Sephora Database, a robust system designed to manage products, customers, orders, reviews, and promotions for a Sephora store. This project involved designing and implementing a database with efficient data storage and management capabilities, ensuring seamless product management, customer interaction, and order processing. Through this experience, I enhanced my skills in database design, SQL, and data integrity enforcement, contributing to the creation of a reliable and scalable retail management system.',
      link: 'https://github.com/yourusername/project2'
    },
    // Add more projects as needed
  ];

  return (
    <div className='pageClass'>
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </section>
    </div>
  );
};

export default Projects;
