import s from "./FriendsListItem.module.css";

function FriendsListItem({
  avatar,
  name,
  isOnline,
}) {
  return (
    <div className={s.container}>
      <img
        src={avatar}
        alt="Avatar"
        width="48"
        className={s.img}
      />
      <p className={s.name}>{name}</p>
      <p
        className={
          isOnline ? s.online : s.offline
        }
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendsListItem;
