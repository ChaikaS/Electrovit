import "./App.scss";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import CardsConteiner from "../Cards/CardsContainer";
import { useSelector, useStore } from "react-redux";

export default function App() {
  const [token, setToken] = useState(false);
  const toggle = () => setToken(!token);

  return (
    <Router>
      <div className="background">
        <div className="navigation-bar">
          <Link className="navigation-bar__link " to="/profile">
            Profile
          </Link>
          <Link className="navigation-bar__link navigation-bar__link_login-page" to="/app">
            Cards
          </Link>
        </div>

        <Switch>
          <Route exact path="/loginPage" render={() => <LoginPage token={token} setToken={setToken} toggle={toggle} />} />

          {/* <Route path="/profile" render={() => <Profile auth={token} />} /> */}
          <Route path="/profile" render={() => <Profile auth={true} />} />
          {/* <Route path="/app" render={() => <CardsConteiner auth={token} />} /> */}
          <Route path="/app" render={() => <CardsConteiner auth={true} />} />
        </Switch>
      </div>
    </Router>
  );
}
