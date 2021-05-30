import "./profile.scss";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProfile } from "../../store/actions/profileAction";

export default function Profile({ auth }) {
  const [valid, setValid] = useState(false);

  const [inputProfile, setInputProfile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    yourCar: "",
    model: "",
    drivingExperience: "",
  });

  const dispatch = useDispatch();

  const handleProfileInputChange = (e) => {
    e.persist();
    setInputProfile({
      ...inputProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileClick = (e) => {
    e.preventDefault();

    if (inputProfile.firstName && inputProfile.lastName && inputProfile.age && inputProfile.yourCar && inputProfile.model && inputProfile.drivingExperience) {
      dispatch(createProfile(inputProfile));
      setValid(true);
    } else {
      setValid(false);
    }
  };

  if (!auth) {
    return <Redirect to="/loginPage" />;
  }

  return (
    <form className="profile__wrapper">
      <div className="profile__wrapper_item">
        <div className="profile__item">First name</div>

        <input type="text" value={inputProfile.firstName} name="firstName" onChange={handleProfileInputChange} placeholder="First name"></input>
      </div>
      <div className="profile__wrapper_item">
        <div className="profile__item">Last name</div>
        <input type="text" value={inputProfile.lastName} name="lastName" onChange={handleProfileInputChange} placeholder="Last name"></input>
      </div>
      <div className="profile__wrapper_item">
        <div className="profile__item">Age</div>
        <input type="text" value={inputProfile.age} name="age" onChange={handleProfileInputChange} placeholder="Age"></input>
      </div>
      <div className="profile__wrapper_item">
        <div className="profile__item">Your car?</div>
        <input type="text" value={inputProfile.yourCar} name="yourCar" onChange={handleProfileInputChange} placeholder="Your car"></input>
      </div>
      <div className="profile__wrapper_item">
        <div className="profile__item">Model</div>
        <input type="text" value={inputProfile.model} name="model" onChange={handleProfileInputChange} placeholder="Model"></input>
      </div>
      <div className="profile__wrapper_item">
        <div className="profile__item">Driving experience</div>
        <input type="text" value={inputProfile.drivingExperience} name="drivingExperience" onChange={handleProfileInputChange} placeholder="Driving experience"></input>
      </div>

      <div className="profile__button">
        {valid ? <div className="success-message">Success! Your profile added.</div> : null}
        <button onClick={handleProfileClick}>Enter</button>
      </div>
    </form>
  );
}
