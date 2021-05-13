import { useState } from "react";
import "./loginPage.scss";

export default function LoginPage({ setToken }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showClickButton] = useState(false);
  const handlerSubmit = (e) => {
    if (userName && password) {
      e.preventDefault();
      setToken({
        userName,
        password,
      });
    } else {
      setToken(false);
    }
  };

  return (
    <form className="loginPage__form" onSubmit={handlerSubmit}>
      <div className="loginPage__form_text">Welcom to Volkswagen World</div>

      <div className="loginPage__form_input">
        {showClickButton && !userName ? <div>Please enter you name</div> : null}
        <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Login"></input>
      </div>

      <div className="loginPage__form_input">
        {showClickButton && !password ? <div>Please enter you password</div> : null}

        <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
      </div>
      <div className="loginPage__form_button">
        <button>Enter</button>
      </div>
    </form>
  );
}
