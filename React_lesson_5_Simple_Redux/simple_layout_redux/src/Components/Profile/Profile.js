import "./profile.scss";
import { Redirect } from "react-router-dom";
import { useState } from "react";

export default function Profile({ auth }) {
  const [inputProfile, setInputProfile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    yourCar: "",
    model: "",
    drivingExperience: "",
  });
  console.log(inputProfile);

  const handleProfileInputChange = (e) => {
    e.persist();
    setInputProfile({
      ...inputProfile,
      [e.target.name]: e.target.value,
    });
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

// export default function LoginPage({ token, setToken, toggle }) {
//   const [userName, setUserName] = useState();
//   const [password, setPassword] = useState();

//   const handlerSubmit = (e) => {
//     if (userName && password) {
//       e.preventDefault();
//       setToken({
//         userName,
//         password,
//       });
//     }
//   };
//   if (token) {
//     return <Redirect to="/profile" />;
//   }

//   return (
//     <form className="loginPage__form" onSubmit={handlerSubmit}>
//       <div className="loginPage__form_text">Welcom to Volkswagen World</div>

//       <div className="loginPage__form_input">
//         <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Login"></input>
//       </div>

//       <div className="loginPage__form_input">
//         <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
//       </div>
//       <div className="loginPage__form_button">
//         <button onClick={toggle}>Enter</button>
//       </div>
//     </form>
//   );
// }
