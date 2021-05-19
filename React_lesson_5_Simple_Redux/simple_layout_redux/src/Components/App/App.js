import "./App.scss";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";
import CardsConteiner from "../Cards/CardsContainer";

export default function App() {
  const [token, setToken] = useState(false);

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
          <Route exact path="/" render={() => <LoginPage token={token} setToken={setToken} />} />
          <Route path="/profile" render={() => <Profile auth={token} />} />
          <Route path="/app" render={() => <CardsConteiner auth={token} />} />
        </Switch>
      </div>
    </Router>
  );
}
