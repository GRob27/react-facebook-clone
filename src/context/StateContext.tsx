import React from "react";

export const StateContext = React.createContext<ContextType | null>(null);

export const StateProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = React.useState<ContextType>();
  return (
    <StateContext.Provider value={{ user, setUser }}>
      {children}
    </StateContext.Provider>
  );
};
