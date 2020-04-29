import React from "react";
import {
  MapStyles,
  CharStyles,
  RoomDef,
  N,
  S,
  E,
  W,
} from "../Styles/formStyle.module.scss";

const Map = ({ init }) => {
  console.log(init);
  return (
    <div className={MapStyles}>
      <div className={RoomDef}>
        <img alt="nic cage" src="../download.png" className={CharStyles} />
      </div>
    </div>
  );
};

export default Map;
