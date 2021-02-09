import React, { FunctionComponent } from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import "./PostOption.css"

type PostOptionProps = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  DropdownIcon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  title?: string;
};

const PostOption: FunctionComponent<PostOptionProps> = ({ Icon, DropdownIcon, title }) => {
  return (
    <div className="post__option">
      <Icon />
        {DropdownIcon && <DropdownIcon/>}
      <p>{title}</p>
    </div>
  );
};

PostOption.defaultProps = {
  title: "",
};

export default PostOption;
