import React, { useState } from "react";

const Hog = ({ hog, onToggleHide }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="ui eight wide column">
      <div className="ui card" onClick={() => setShowDetails(!showDetails)}>
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3>{hog.name}</h3>
          {showDetails && (
            <div className="details">
              <p>Specialty: {hog.specialty}</p>
              <p>Weight: {hog.weight}</p>
              <p>Greased: {hog.greased ? "Yes" : "No"}</p>
              <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
            </div>
          )}
        </div>
        <button onClick={(e) => { 
          e.stopPropagation(); 
          onToggleHide(hog.name);
        }}>
          Hide
        </button>
      </div>
    </div>
  );
};

export default Hog;
