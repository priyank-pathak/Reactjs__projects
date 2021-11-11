import React from 'react'
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({displayName, username , verified , text , image , avatar
}) {
    return (
        <div className="post">
        <div className="post__avatar">
     <Avatar src="file:///C:/Users/DELL/OneDrive/Pictures/Camera%20Roll/IMG_20201001_135402_701.jpg"/>  
        </div>
        <div className="post__body">
        <div className="post__header">
        <div className="post__headerText">
        <h3>
        Priyank Pathak{""}
        <span className="post__headerSpeacial">
        <VerifiedUserIcon className="post__badge"/> 
        cleverprogrammer
        </span>
        </h3>
        </div>
        <div className="post__headDescription">
        <p>I challenge you to build a Twitter Clone with React</p>
        </div>
        </div>
        <img src="https:/media3.giphy.com/media/65ATdpi3clAjomZ39/giphy.gif" alt=""/>
        <div className="post__footer">
        <ChatBubbleOutlineIcon fontsize="small"/>
        <RepeatIcon fontsize="small"/>
        <FavoriteBorderIcon fontsize="small"/>
        <PublishIcon fontsize="small"/>
        </div>
        </div>
        </div>
    );
}

export default Post

