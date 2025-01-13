import React from 'react';
import "./Skills.scss";
//import "./assets";

const Skills = () => {
  const skillsData = [
    {
      category: "Programming",
      skills: [
        { name: "JavaScript", icon: "/assets/javascript.png" },
        { name: "C#", icon: "/assets/csharp.png" },
        { name: "JAVA", icon: "/assets/java.png" },
        { name: "TypeScript", icon: "/assets/typescript.png" },
        { name: "Python", icon: "/assets/python.png" },
        { name: "C", icon: "/assets/c.png" }
      ]
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Node.js", icon: "/assets/nodejs.png" },
        { name: ".NET", icon: "/assets/dotnet.png" },
        { name: "React", icon: "/assets/react.png" },
        { name: "Angular", icon: "/assets/angular.png" },
      ]
    },
    {
      category: "Cloud",
      skills: [
        { name: "Azure", icon: "/assets/azure.png" },
        { name: "AWS", icon: "/assets/aws.png" }
      ]
    },
    {
      category: "Dev Tools",
      skills: [
        { name: "Git", icon: "/assets/git.png" },
        { name: "Bitbucket", icon: "/assets/bitbucket.png" },
        { name: "Postman", icon: "/assets/postman.png" },
        { name: "Docker", icon: "/assets/docker.png" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", icon: "/assets/mysql.png" },
        { name: "PostgreSQL", icon: "/assets/postgresql.png" }
      ]
    },
    {
      category: "Methodologies",
      skills: [
        { name: "Scrum", icon: "/assets/scrum.png" },
        { name: "Agile", icon: "/assets/agile.png" }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Communication", icon: "/assets/communication.png" },
        { name: "Time Management", icon: "/assets/timemanagement.png" },
        { name: "Team Player", icon: "/assets/teamplayer.png" }
      ]
    }
  ];
  return (
    
    <div id="skills" className='page3Class'>
    <div className='mainHeading'>I have experience with these technologies</div>
    <div className='skillsSection'>
      {skillsData.map((section, index) => (
        <div key={index} className="skills-container">
          <div className='skillHeading'>{section.category}</div>
          <div className="skills-list">
            {section.skills.map((skill, idx) => (
              <div key={idx} className="skill-box">
                <img src={`${process.env.PUBLIC_URL}${skill.icon}`} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;
