import React, { FunctionComponent } from "react";
import { Avatar, SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import "./SidebarRow.css";

type SidebarRowProps = {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  src?: string;
  title?: string;
};

const SidebarRow: FunctionComponent<SidebarRowProps> = ({ src, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

SidebarRow.defaultProps = {
  title: "",
  src: "",
  Icon: undefined,
};

export default SidebarRow;
