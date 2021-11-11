import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat({ addNewChat}) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000));
  }, []);

  const createchat = ()=>{
      const roomName = prompt("Please enter name for chat");

      if (roomName) {
          // do some clever database stuff.....
      }
  };

  return !addNewChat ?(
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

      <div className="sidebarChat_info">
        <h2>Room names</h2>
        <p>Last Seen....</p>
      </div>
    </div>
  ):(
      <div onClick={createchat} className="sidebarChat">
          <h2>Add new Chat </h2>
      </div>
  );
}

export default SidebarChat;
