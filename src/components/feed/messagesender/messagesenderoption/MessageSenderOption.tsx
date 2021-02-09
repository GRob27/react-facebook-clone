import React, { FunctionComponent } from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import "./MessageSenderOption.css";

type MessageSenderOptionProps = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  color?: string;
};

const MessageSenderOption: FunctionComponent<MessageSenderOptionProps> = ({ Icon, title, color }) => {
  return (
    <div className="messageSender__option">
      <Icon style={{ color: `${color}` }} />
      <h3>{title}</h3>
    </div>
  );
};

MessageSenderOption.defaultProps = {
  color: "",
};

export default MessageSenderOption;
