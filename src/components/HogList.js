import React from "react";
import Hog from "./Hog";

const HogList = ({ hogs, onToggleHide }) => (
  <div className="ui grid container">
    {hogs.map((hog) => (
      <Hog key={hog.name} hog={hog} onToggleHide={onToggleHide} />
    ))}
  </div>
);

export default HogList;
