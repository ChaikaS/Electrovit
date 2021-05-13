import "./profile.scss";
export default function Profile() {
  return (
    <form className="profile__wrapper">
      <div className="profile__wrapper_item">
        <div className="profile__item">First name</div>
        <input placeholder="First name"></input>
      </div>
      <div className="profile__wrapper_item">
        <div className="profile__item">Last name</div>
        <input placeholder="Last name"></input>
      </div>
      <div className="profile__wrapper_item">
        <div className="profile__item">Age</div>
        <input placeholder="Age"></input>
      </div>
      <div className="profile__wrapper_item">
        <div className="profile__item">Your car?</div>
        <input placeholder="Your car"></input>
      </div>
      <div className="profile__wrapper_item">
        <div className="profile__item">Model</div>
        <input placeholder="Model"></input>
      </div>
      <div className="profile__wrapper_item">
        <div className="profile__item">Driving experience</div>
        <input placeholder="Driving experience"></input>
      </div>
    </form>
  );
}
