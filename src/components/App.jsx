import s from "./App.module.css";
import Profile from "./Profile/Profile.jsx";
import userData from "./data/userData.json";

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
    </div>
  );
};

export default App;
