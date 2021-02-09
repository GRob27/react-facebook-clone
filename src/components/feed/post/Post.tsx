import React, { FunctionComponent } from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";

import PostOption from "./postoption/PostOption";
import PostInfo from "./postinfo/PostInfo";
import "./Post.css";

type PostProps = {
  profilePic: string;
  username: string;
  timestamp: TimestampType;
  message?: string;
  image?: string;
};

const Post: FunctionComponent<PostProps> = ({ profilePic, image, username, timestamp,  message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <PostInfo username={username} timestamp={timestamp} />
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <PostOption Icon={ThumbUpIcon} title="Like" />
        <PostOption Icon={ChatBubbleOutlineIcon} title="Comment" />
        <PostOption Icon={NearMeIcon} title="Share" />
        <PostOption Icon={AccountCircleIcon} DropdownIcon={ExpandMoreOutlined}/>
      </div>
    </div>
  );
};

export default Post;
