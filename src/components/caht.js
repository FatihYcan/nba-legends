import React, { useState } from "react";
import ItemStyled from "../scss/item.module.scss";

const İtem = ({ language }) => {
  const { name, hour, image } = language;
  const [toggle, setToggle] = useState(true);
  const handleCardShow = (e) => {
    setToggle(!toggle);
  };

  return (
    <div className={ItemStyled.card} onClick={handleCardShow}>
      <div className={ItemStyled["list-container"]}>
        {toggle ? (
          <img className={ItemStyled.img} src={image} alt={name} />
        ) : (
          <li className={ItemStyled.list}>{hour}</li>
        )}
        <h4 className={ItemStyled.name}>{name}</h4>
      </div>
    </div>
  );
};

export default İtem;

// import CardStyled from "../scss/card.module.scss";
// import data from "../data";
// import Item from "./İtem";

// const Card = () => {
//   return (
//     <div className={CardStyled["card-container"]}>
//       <div className={CardStyled.cards}>
//         {data.map((language, name) => (
//           <Item language={language} key={name} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;

///////////////////////////////////////////////

import { data } from "../helper/data";
import React, { useState } from "react";

const PlayerCard = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="container">
      {data.map(({ name, img, statistics }, index) => (
        <div key={index} className="card">
          <img
            className="img"
            src={img}
            alt="img"
            onClick={() => setToggle(!toggle)}
          />
          <h2>{name}</h2>

      
        </div>
      ))}
    </div>
  );
};

export default PlayerCard;
