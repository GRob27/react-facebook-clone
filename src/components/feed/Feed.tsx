import React, { useEffect, useState } from "react";

import MessageSender from "./messagesender/MessageSender";
import StoryReel from "./storyreel/StoryReel";
import Post from "./post/Post";
import "./Feed.css";
import { db } from "../../api/firebase";

const Feed = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post: PostType) => {
        return (
          <Post
            key={post.id}
            message={post.data.message}
            profilePic={post.data.profilePic}
            username={post.data.username}
            timestamp={post.data.timestamp}
            image={post.data.image}
          />
        );
      })}
    </div>
  );
};

export default Feed;
