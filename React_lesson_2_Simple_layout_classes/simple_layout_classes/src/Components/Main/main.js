import "./main.scss";
import CardsConteiner from "../Cards/CardsContainer";
// import Card from "../Cards/Card";

export default function Main({ avatar }) {
  return (
    <main className="main">
      <div className="main-image">{avatar.image}</div>
      <div className="main-alt">{`${avatar.alt}`}</div>
      <CardsConteiner />
      {/* <Card /> */}
    </main>
  );
}
