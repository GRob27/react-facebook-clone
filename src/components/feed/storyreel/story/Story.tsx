import React, { FunctionComponent } from "react";
import { Avatar } from "@material-ui/core";

import "./Story.css";

type StoryProps = {
  image: string;
  profileSrc: string;
  title: string;
};

const Story: FunctionComponent<StoryProps> = ({ image, profileSrc, title }) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
