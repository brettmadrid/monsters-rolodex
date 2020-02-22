/**
 * This component is the container for the Card component
 * props: monsters    from: App.js
 */

import React from "react";
import "./CardList.css";
import { Card } from "../Card/Card";

export const CardList = ({ monsters }) => {
  return (
    // 'card-list' is outer container
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
