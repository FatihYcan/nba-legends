import React, { useState } from "react";

const PlayerCard = ({ name, img, statistics }, index) => {
  const [displayStatus, setDisplayStatus] = useState(false);

  return (
    <div>
      <div key={index} className="card">
        {displayStatus ? ( // true durumunda istatik. gözükecek
          <ul onClick={() => setDisplayStatus(!displayStatus)} className="ul">
            {statistics.map((stats) => (
              <li>🏀{stats}</li>
            ))}
          </ul>
        ) : (
          //  false durumunda img gelecek
          <div>
            <img
              src={img}
              className="img"
              alt="img"
              onClick={() => setDisplayStatus(!displayStatus)}
            />
          </div>
        )}
        <div>
          <a href={`https://tr.wikipedia.org/wiki/${name}`} target="blank">
            <h2>{name}</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
