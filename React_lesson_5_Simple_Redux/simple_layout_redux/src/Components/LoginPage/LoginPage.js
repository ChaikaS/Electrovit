import { useState } from "react";
import "./loginPage.scss";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
import { createLoginPage } from "../../store/actions/loginActions";

export default function LoginPage({ token, setToken, toggle }) {
  const [loginInfo, setLoginInfo] = useState({
    userName: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleLoginPageInputChange = (e) => {
    e.persist();
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (loginInfo.userName && loginInfo.password) {
      dispatch(createLoginPage(loginInfo));
      setToken({
        loginInfo,
      });
    } else {
      setToken(false);
    }
  };
  if (token) {
    return <Redirect to="/profile" />;
  }

  return (
    <form className="loginPage__form">
      <div className="loginPage__form_text">Welcom to Volkswagen World</div>

      <div className="loginPage__form_input">
        <input type="text" value={loginInfo.userName} name="userName" onChange={handleLoginPageInputChange} placeholder="Login"></input>
      </div>

      <div className="loginPage__form_input">
        <input type="text" value={loginInfo.password} name="password" onChange={handleLoginPageInputChange} placeholder="Password"></input>
      </div>
      <div className="loginPage__form_button">
        <button onClick={handlerSubmit}>Enter</button>
      </div>
    </form>
  );
}
