import React, { useContext } from "react";
import axiosWithAuth from "../../Middleware/axiosWithAuth";
import { MoveCharContext } from "../../contexts/MoveCharContext";
import { MoveRoomContext } from "../../contexts/MoveRoomContext";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import {
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaStore,
  FaHandRock,
  FaHandPaper,
} from "react-icons/fa";
import {
  ControlsStyles,
  ControlsDiv,
  HoverText,
  ControlIcon,
  PopUpBody,
  PopUpHeader,
} from "../../Styles/formStyle.module.scss";

const Controls = () => {
  const { setMoveChar } = useContext(MoveCharContext);
  const { room, setRoom } = useContext(MoveRoomContext);

  //handle direction actions

  const handleMove = (e, d) => {
    e.preventDefault();
    setMoveChar(d);
    const move = { username: room.username, direction: d };
    console.log(move);
    axiosWithAuth()
      .post("/adv/move/", move)
      .then((res) => {
        // console.log(res.data);
        setRoom({
          username: room.username,
          location: res.data.title,
          description: res.data.description,
          players: res.data.players,
          items: ["dusty can", "bloody shotgun"],
          error_msg: res.data.error_msg,
          // nsew: [true, true, false, true],
        });
      })
      .catch(
        (err) => (
          setRoom({
            ...room,
            items: ["dusty can", "bloody shotgun"],
            error_msg: "you can't move in that direction",
            // nsew: [true, true, false, true],
          }),
          console.log(err)
        )
      )
      .finally(() => {
        setMoveChar("");
      });
  };

  //handle give, take and Store actions

  const handleTake = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/adv/take/", e.target.innerText)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => err.message);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/adv/drop/", e.target.innerText)
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => err.message);
  };

  // const handleBuy = (e) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .post("/adv/buy/", e.target.innerText)
  //     .then((res) => {
  //       // console.log(res.data);
  //     })
  //     .catch((err) => err.message);
  // };

  // const handleSell = (e) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .post("/adv/sell/", e.target.innerText)
  //     .then((res) => {
  //       // console.log(res.data);
  //     })
  //     .catch((err) => err.message);
  // };

  return (
    <div className={ControlsStyles}>
      <div>controls</div>
      <div className={ControlsDiv}>
        <button id="pickUp">
          <div className={HoverText}>
            <p>pick up item</p>
            <FaHandRock className={ControlIcon} />
          </div>
        </button>
        <UncontrolledPopover trigger="legacy" placement="top" target="pickUp">
          <PopoverHeader className={PopUpHeader}>pick up item</PopoverHeader>
          <PopoverBody className={PopUpBody}>
            {/* {room.items.map((item) => (
              <button onClick={handleTake}>{item}</button>
            ))} */}
          </PopoverBody>
        </UncontrolledPopover>
        <button id="dropItem">
          <div className={HoverText}>
            <p>drop item</p>
            <FaHandPaper className={ControlIcon} />
          </div>
        </button>
        <UncontrolledPopover trigger="legacy" placement="top" target="dropItem">
          <PopoverHeader className={PopUpHeader}>drop item</PopoverHeader>
          <PopoverBody className={PopUpBody}>
            {/* {room.items.map((item) => (
              <button onClick={handleDrop}>{item}</button>
            ))} */}
          </PopoverBody>
        </UncontrolledPopover>
        <button onClick={(e) => handleMove(e, "w")}>
          <div className={HoverText}>
            <p>move left</p>
            <FaArrowCircleLeft className={ControlIcon} />
          </div>
        </button>
        <button onClick={(e) => handleMove(e, "n")}>
          <div className={HoverText}>
            <p>move up</p>
            <FaArrowCircleUp className={ControlIcon} />
          </div>
        </button>
        <button onClick={(e) => handleMove(e, "e")}>
          <div className={HoverText}>
            <p>move right</p>
            <FaArrowCircleRight className={ControlIcon} />
          </div>
        </button>
        <button onClick={(e) => handleMove(e, "s")}>
          <div className={HoverText}>
            <p>move down</p>
            <FaArrowCircleDown className={ControlIcon} />
          </div>
        </button>
        <button id="shop">
          <div className={HoverText}>
            <p>shop</p>
            <FaStore className={ControlIcon} />
          </div>
        </button>
        <UncontrolledPopover trigger="legacy" placement="top" target="shop">
          <PopoverHeader className={PopUpHeader}>item shop</PopoverHeader>
          <PopoverBody className={PopUpBody}>
            <div>buy</div>
            {/* {room.items.map((item) => (
              <button onClick={handleBuy}>{item}</button>
            ))} */}
            <div>sell</div>
            {/* {room.items.map((item) => (
              <button onClick={handleSell}>{item}</button>
            ))} */}
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    </div>
  );
};

export default Controls;
