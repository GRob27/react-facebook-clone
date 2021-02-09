import React, { useEffect, useState } from "react";
import { db } from "../../../api/firebase";

import Story from "./story/Story";
import "./StoryReel.css";

const StoryReel = () => {
 
  const [stories, setStories] = useState<any[]>([]);

  useEffect(() => {
    db.collection("stories")
      .onSnapshot((snapshot) =>
        setStories(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);

  return (
    <div className="storyReel">
      {stories.slice(0,5).map((story: StoryType) => (
        <Story key={story.id}
          image={story.data.image}
          profileSrc={story.data.photoURL}
          title={story.data.displayName}
        />
      ))}
    </div>
  );
};

export default StoryReel;
