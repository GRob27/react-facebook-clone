import React from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FlagIcon from "@material-ui/icons/Flag";
import ForumIcon from "@material-ui/icons/Forum";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SubscriptionsOutlineIcon from "@material-ui/icons/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import logo from "../../images/facebook-logo.png";
import HeaderOption from "./headeroption/HeaderOption";
import SearchBar from "./searchbar/SearchBar";
import HeaderInfo from "./headerinfo/HeaderInfo";
import { StateContext } from "../../context/StateContext";
import "./Header.css";


const Header = () => {
  const { user } = React.useContext(StateContext) as ContextType;
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <SearchBar Icon={SearchIcon} placeholder="Search Facebook" />
      </div>
      <div className="header__center">
        <HeaderOption Icon={HomeIcon} active />
        <HeaderOption Icon={FlagIcon} />
        <HeaderOption Icon={SubscriptionsOutlineIcon} />
        <HeaderOption Icon={StorefrontOutlinedIcon} />
        <HeaderOption Icon={SupervisedUserCircleIcon} />
      </div>
      <div className="header__right">
         <HeaderInfo title={user.displayName} src={user.photoURL} /> 
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
