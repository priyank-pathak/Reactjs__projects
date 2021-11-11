import React , {useEffect, useState} from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
//import db from "./firebase";

function Sidebar() {

  //const [rooms, setRooms] = useState([]);

  //useEffect(() =>{
    //db.collection("rooms").onSnapshot((snapshot)=>
    //setRooms(
    //  snapshot.docs.map((doc)=>({
    //    id: doc.id,
    //    data: doc.data(),
    //  }))
   // )
   // );
 // },[]);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_hederRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />

          <input placeholder="search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat/>
       <SidebarChat/>
       <SidebarChat/>
       <SidebarChat/>
      </div>
    </div>
  );
}

export default Sidebar;
