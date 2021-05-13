import "./App.scss";
import Header from "../Header/Header";
import Main from "../Main/main";
import Footer from "../Footer/Footer";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import Profile from "../Profile/Profile";
import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";

export default function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

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
          <Route path="/profile" render={() => <Profile />} />
          <Route
            path="/app"
            render={() => (
              <div>
                <Header />
                <Main />
                <Footer />
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
