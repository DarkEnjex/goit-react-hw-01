import FriendListItem from "../FriendsListItem/FriendsListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
