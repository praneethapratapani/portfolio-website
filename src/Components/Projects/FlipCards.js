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
            </div>
          </div>
          <div className="card back">
            <div className="card-body">
              <p className={cn('card-text', 'text-container')}>{card.description}</p>
              <p className="text-bottom">{card.link}</p>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
  
  export default FlipCard;