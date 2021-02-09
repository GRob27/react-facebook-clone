import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VideocamIcon from "@material-ui/icons/Videocam";
import firebase from "firebase";

import MessageSenderOption from "./messagesenderoption/MessageSenderOption";
import { StateContext } from "../../../context/StateContext";
import { db } from "../../../api/firebase";
import "./MessageSender.css";

const MessageSender = () => {
  const { user } = React.useContext(StateContext) as ContextType;
  const [userInput, setUserInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if(!userInput && !imageURL) return;
    db.collection("posts").add({
      message: userInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });
    setUserInput("");
    setImageURL("");
  };

  const userInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const imageURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(event.target.value);
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}`}
            value={userInput}
            onChange={userInputChange}
            id="messageSender__input__mind"
          />
          <input
            value={imageURL}
            onChange={imageURLChange}
            placeholder="image URL (Optional)"
          />
          <button type="submit" onClick={handleSubmit}></button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <MessageSenderOption
          Icon={VideocamIcon}
          color="red"
          title="Live Video"
        />
        <MessageSenderOption
          Icon={PhotoLibraryIcon}
          color="green"
          title="Photo/Video"
        />
        <MessageSenderOption
          Icon={InsertEmoticonIcon}
          color="orange"
          title="Feeling/Activity"
        />
      </div>
    </div>
  );
};

export default MessageSender;
