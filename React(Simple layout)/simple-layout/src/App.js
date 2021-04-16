import "./App.scss";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/content";
import Footer from "./Components/Footer/Footer";

function App({ userDate }) {
  const user = userDate.user;
  const avatar = userDate.avatar;
  return (
    <div>
      <Header user={user} />
      <Content avatar={avatar} />
      <Footer />
    </div>
  );
}

export default App;
