import React, { useState } from "react";
import { data } from "../helper/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const filteredFunc = (player) => {
    const inputValue = value
      .trim()
      .replace(/[^a-z ]/gi, "")
      .toLowerCase();
    if (player.name.toLowerCase().includes(inputValue)) {
      return player;
    }
  };
  return (
    <div>
      <div className="input">
        <input
          placeholder="Search Player..."
          type="search"
          onChange={handleChange}
        ></input>
      </div>

      <div className="container">
        {data.filter(filteredFunc).map(({ name, img, statistics }) => (
          <PlayerCard
            key={name}
            name={name}
            img={img}
            statistics={statistics}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
