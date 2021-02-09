import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMore";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import SidebarRow from "./sidebar-row/SidebarRow";
import { StateContext } from "../../context/StateContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { user } = React.useContext(StateContext) as ContextType;
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="See More" />
    </div>
  );
};

export default Sidebar;
