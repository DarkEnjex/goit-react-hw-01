import s from "./Profile.module.css";

const Profile = ({
  name = "Petra Marica",
  tag = "@pmarica",
  location = "Salvador, Brasil",
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats = {
    followers: 1000,
    views: 2000,
    likes: 3000,
  },
}) => {
  const { followers, views, likes } = stats;
  return (
    <>
      <div className={s.container}>
        <div className={s.containerProfile}>
          <img
            src={image}
            alt="User avatar"
            className={s.imgProfile}
          />
          <p className={s.nameProfile}>{name}</p>
          <p className={s.tagProfile}>
            <span className={s.spanTagProfile}>
              @
            </span>
            {tag}
          </p>
          <p className={s.locationProfile}>
            {location}
          </p>
        </div>

        <ul className={s.list}>
          <li className={s.listItem}>
            <span>Followers</span>
            <span className={s.listSpan}>
              {followers}
            </span>
          </li>
          <li className={s.listItem}>
            <span>Views</span>
            <span className={s.listSpan}>
              {views}
            </span>
          </li>
          <li className={s.listItem}>
            <span>Likes</span>
            <span className={s.listSpan}>
              {likes}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
