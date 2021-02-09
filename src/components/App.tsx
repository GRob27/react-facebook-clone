import React from "react";

import Feed from "./feed/Feed";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Widgets from "./widgets/Widgets";
import Login from "./Login/Login";
import { StateContext } from "../context/StateContext";

import "./App.css";

const App = () => {
  const { user } = React.useContext(StateContext) as ContextType;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <React.Fragment>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
