import React, { useContext } from "react";
import { MoveCharContext } from "../contexts/MoveCharContext";
import { MoveRoomContext } from "../contexts/MoveRoomContext";
import {
  MapStyles,
  CharStyles,
  RoomDef,
  N,
  S,
  E,
  W,
  NN,
  SS,
  EE,
  WW,
  ErrorMsg,
} from "../Styles/formStyle.module.scss";

const n = false;
const s = true;
const e = false;
const w = true;

const Map = () => {
  const { moveChar } = useContext(MoveCharContext);
  const { room } = useContext(MoveRoomContext);
  return (
    <div className={MapStyles}>
      {n ? <div className={NN}></div> : ""}
      {s ? <div className={SS}></div> : ""}
      {e ? <div className={EE}></div> : ""}
      {w ? <div className={WW}></div> : ""}
      <div className={RoomDef}>
        <img
          alt="nic cage"
          src="../download.png"
          className={
            moveChar === "n"
              ? N
              : moveChar === "s"
              ? S
              : moveChar === "e"
              ? E
              : moveChar === "w"
              ? W
              : CharStyles
          }
        />
      </div>
      {room.error_msg ? <div className={ErrorMsg}>{room.error_msg}</div> : ""}
    </div>
  );
};

export default Map;
