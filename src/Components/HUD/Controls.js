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
    axiosWithAuth()
      .post("/adv/move/", move)
      .then((res) => {
        // console.log(res.data);
        setRoom({
          ...room,
          location: res.data.title,
          description: res.data.description,
          players: res.data.players,
          items: res.data.items,
          error_msg: res.data.error_msg,
          nsew: res.data.nsew,
        });
      })
      .catch(
        (err) => (
          setRoom({
            ...room,
            error_msg: "you can't move in that direction",
          }),
          err.message
        )
      )
      .finally(() => {
        setMoveChar("");
      });
  };

  //handle give, take and Store actions

  const handleTake = (e, item) => {
    e.preventDefault();
    const take = { item_name: e.target.innerText, username: room.username };
    axiosWithAuth()
      .post("/adv/take/", take)
      .then((res) => {
        // console.log(res.data);
        setRoom({
          ...room,
          items: room.items.filter((it) => it !== item),
          inventory: [...room.inventory, res.data],
          error_msg: `${room.username} picked up a ${take.item_name}`,
        });
        // console.log("take responsible");
      })
      .catch((err) => err.message);
  };

  const handleDrop = (e, item) => {
    e.preventDefault();
    const drop = { player_item_id: item.player_item_id };
    axiosWithAuth()
      .post("/adv/drop/", drop)
      .then((res) => {
        setRoom({
          ...room,
          items: [...room.items, item.item],
          inventory: room.inventory.filter(
            (it) => it.player_item_id !== item.player_item_id
          ),
          error_msg: `${room.username} dropped a ${item.item}`,
        });
        // console.log("take responsible");
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
            {room.items &&
              room.items.map((item) => (
                <button onClick={(e) => handleTake(e, item)}>{item}</button>
              ))}
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
            {room.inventory &&
              room.inventory.map((item) => (
                <button key={item.id} onClick={(e) => handleDrop(e, item)}>
                  {item.item}
                </button>
              ))}
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
            {room.inventory &&
              room.inventory.map((item) => (
                // <button>{item}</button>
                <button>{item.item}</button>
              ))}
            <div>sell</div>
            {room.inventory &&
              room.inventory.map((item) => (
                // <button>{item}</button>
                <button>{item.item}</button>
              ))}
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    </div>
  );
};

export default Controls;
