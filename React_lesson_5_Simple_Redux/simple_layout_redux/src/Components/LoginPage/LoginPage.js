import { useState } from "react";
import "./loginPage.scss";
import { Redirect } from "react-router";

export default function LoginPage({ token, setToken, toggle }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handlerSubmit = (e) => {
    if (userName && password) {
      e.preventDefault();
      setToken({
        userName,
        password,
      });
    }
  };
  if (token) {
    return <Redirect to="/profile" />;
  }

  return (
    <form className="loginPage__form" onSubmit={handlerSubmit}>
      <div className="loginPage__form_text">Welcom to Volkswagen World</div>

      <div className="loginPage__form_input">
        <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Login"></input>
      </div>

      <div className="loginPage__form_input">
        <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
      </div>
      <div className="loginPage__form_button">
        <button onClick={toggle}>Enter</button>
      </div>
    </form>
  );
}
