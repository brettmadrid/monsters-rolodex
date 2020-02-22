/**
 * This component renders the card-container className
 * props: monster { name, id, email }   from: CardList.js
 * It also renders an image for each card based on an id passed
 * to the image url source
 */

import React from "react";
import "./Card.css";

export const Card = props => {
  const { name, id, email } = props.monster;
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
