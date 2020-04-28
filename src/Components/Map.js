import React from "react";
import { MapStyles, CharStyles } from "../Styles/formStyle.module.scss";

const Map = ({ init }) => {
  console.log(init);
  return (
    <div className={MapStyles}>
      <div>
        <img alt="nic cage" src="../download.png" className={CharStyles} />
      </div>
    </div>
  );
};

export default Map;
