import Profile from "./Profile/Profile.jsx";
import userData from "./data/userData.json";

import FriendList from "./FriendList/FriendList.jsx";
import friends from "./data/friends.json";

import "./App.module.css";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};

export default App;
