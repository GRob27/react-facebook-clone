import React, { FunctionComponent } from "react";

import "./PostInfo.css";

type PostInfoProps = {
  username: string;
  timestamp: TimestampType;
};
 
const PostInfo: FunctionComponent<PostInfoProps> = ({ username, timestamp }) => {
  return (
    <div className="post__topInfo">
      <h3>{username}</h3>
      <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
    </div>
  );
};

export default PostInfo;
