import "./App.scss";
import Header from "../Header/Header";
import Content from "../Content/content";
import Footer from "../Footer/Footer";

export default function App({ userDate }) {
  const avatar = userDate.avatar;
  const user = userDate.user;

  return (
    <div>
      <Header user={user} />
      <Content avatar={avatar} />
      <Footer />
    </div>
  );
}
