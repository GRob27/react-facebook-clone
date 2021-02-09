import React, { FunctionComponent } from "react";
import { Avatar } from "@material-ui/core";

import "./HeaderInfo.css";

type HeaderInfoProps = {
  title: string;
  src?: string;
};

const HeaderInfo: FunctionComponent<HeaderInfoProps> = ({ title, src }) => {
  return (
    <div className="header__option">
      <div className="header__info">
        <Avatar src={src} />
        <h4>{title}</h4>
      </div>
    </div>
  );
};

HeaderInfo.defaultProps = {
  src: "",
};

export default HeaderInfo;
