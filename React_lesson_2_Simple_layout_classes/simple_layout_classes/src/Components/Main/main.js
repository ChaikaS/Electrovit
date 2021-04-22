import "./main.scss";
import CardsConteiner from "../Cards/CardsContainer";

export default function Main({ avatar }) {
  return (
    <main className="main">
      <div className="main__image">{avatar.image}</div>
      <div className="main__alt">{`${avatar.alt}`}</div>
      <CardsConteiner className="main-cardconteiner" />
    </main>
  );
}
