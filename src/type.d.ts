type ContextType = {
  user: any;
  setUser: Dispatch<any>;
};

type TimestampType = {
  seconds: number;
  nanoseconds: number;
  toDate: () => Date;
};

type StoryType = {
  id: string;
  data: {
    image: string;
    photoURL: string;
    displayName: string;
  };
};

type PostType = {
  id: string;
  data: {
    message: string;
    profilePic: string;
    username: string;
    timestamp: any;
    image: string;
  };
};
