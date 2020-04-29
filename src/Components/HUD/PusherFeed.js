import React, { useState } from "react";
import {
  PusherFeedStyles,
  PusherFeedDiv,
} from "../../Styles/formStyle.module.scss";

const PusherFeed = () => {
  const [chatFeed, setChatFeed] = useState([]);

  return (
    <div className={PusherFeedStyles}>
      <div>live chat feed</div>
      <div className={PusherFeedDiv}>
        {/* {chatFeed.map(message => {
          <div>{message}</div>
        })} */}
        <div>get rekt kid</div>
        <div>asl?</div>
        <div>1v1 me i swear2g</div>
        <div>ur trash</div>
        <div>gg</div>
        <div>tell ur mom hi</div>
        <div>f</div>
        <div>god im lonely</div>
        <div>i'm calling god</div>
        <div>get rekt kid</div>
        <div>asl?</div>
        <div>1v1 me i swear2g</div>
        <div>ur trash</div>
        <div>gg</div>
        <div>tell ur mom hi</div>
        <div>f</div>
        <div>god im lonely</div>
        <div>i'm calling god</div>
        <div>get rekt kid</div>
        <div>asl?</div>
        <div>1v1 me i swear2g</div>
        <div>ur trash</div>
        <div>gg</div>
        <div>tell ur mom hi</div>
        <div>f</div>
        <div>god im lonely</div>
        <div>i'm calling god</div>
      </div>
    </div>
  );
};

export default PusherFeed;
