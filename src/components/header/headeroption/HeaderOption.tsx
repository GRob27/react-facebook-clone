import React, { FunctionComponent } from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import "./HeaderOption.css";

type HeaderOptionProps = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  active?: boolean;
  fontsize?: "large" | "small" | "inherit" | "default" | undefined;
};

const HeaderOption: FunctionComponent<HeaderOptionProps> = ({
  Icon,
  fontsize,
  active,
}) => {
  return (
    <div
      className={`header__option ${active ? "header__option--active" : null}`}
    >
      <Icon fontSize={fontsize} />
    </div>
  );
};

HeaderOption.defaultProps = {
  active: false,
  fontsize: "large",
};

export default HeaderOption;
