import "./App.scss";
import Header from "../Header/Header";
import Content from "../Main/main";
import Footer from "../Footer/Footer";

export default function App({ userDate }) {
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
