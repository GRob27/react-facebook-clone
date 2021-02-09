import React, { FunctionComponent } from "react";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

import "./SearchBar.css";

type SearchBarProps = {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  placeholder: string;
};

const SearchBar: FunctionComponent<SearchBarProps> = ({
  Icon,
  placeholder,
}) => {
  return (
    <div className="header__input">
      <Icon />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
