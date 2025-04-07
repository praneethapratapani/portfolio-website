import "./FlipCards.scss";
import { useState } from "react"; 
import cn from "classnames";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }
    return (
      <section id="projects">
      <div
      className="flip-card-outer"
      onClick={handleClick} 
    >
      <div
        className={cn("flip-card-inner", {
          showBack, 
          "click-trigger": card.variant === "click"
        })}
      >
      
          <div className="card front">
            <div className="card-body">
              <p className="card-text">{card.title}</p>
              <img className="project-image"src={`${process.env.PUBLIC_URL}${card.icon}`} alt={card.name} />
              <div className="tech-stack">{card.techStack}</div>
            </div>
          </div>
          <div className="card back">
            <div className="card-body">
              <p className={cn('card-text', 'text-container')}>{card.description}</p>
              <div className="btn-group">
                <a href={card.link} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                {card.live && (
                  <a href={card.live} target="_blank" rel="noopener noreferrer" className="btn btn-live">Live</a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
  
  export default FlipCard;