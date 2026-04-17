import { useState } from "react";
import { MyFriendContext } from "./Context";


const FriendContext = ({ children }) => {
  const [timelineFriends, setTimelineFriends] = useState([]);

  const value = {
    timelineFriends,
    setTimelineFriends,
  };

  return (
    <MyFriendContext.Provider value={value}>
      {children}
    </MyFriendContext.Provider>
  );
};

export default FriendContext;