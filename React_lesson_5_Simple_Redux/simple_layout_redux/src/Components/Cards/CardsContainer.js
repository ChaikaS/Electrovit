import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { apiCall } from "../../api/mockedApi";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Card from "./Card";
import "./cardConteiner.scss";
import { CardError } from "./CardsObject/CardError";
import CardsCreationForm from "./CardsObject/CardsCreationForm";
import { useDispatch, useStore, useSelector } from "react-redux";
import { createCards, removeCards } from "../../store/actions/cardsActions";

export default function CardsConteiner({ auth }) {
  const [cards, setCards] = useState([]);
  console.log(cards);

  const store = useStore();
  const cardss = useSelector((state) => state.cardss.concat(cards));

  console.log(store.getState());
  console.log(cardss);

  const dispatch = useDispatch();

  const [isApiCallError, setIsApiCallError] = useState(false);

  useEffect(() => {
    apiCall()
      .then((data) => {
        setCards(data.mockedResponce);
      })
      .catch((dataError) => {
        setIsApiCallError({ dataError, isApiCallError: true });
      });
  }, []);

  const handleError = (e) => {
    e.preventDefault();
    if (isApiCallError) {
      setIsApiCallError(true);
    }
  };

  const handleAddCards = (newObject) => {
    setCards([...cards, newObject]);
    dispatch(createCards(newObject));
  };

  const handlerRemoveCard = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("id");
    setCards(cards.filter((item) => item.id !== id));
    dispatch(removeCards(id));
  };
  if (!auth) {
    return <Redirect to="/loginPage" />;
  }

  return (
    <div>
      <Header />
      <div onSubmit={handleError}>
        {setIsApiCallError ? <CardError error={isApiCallError.dataError} /> : null}

        <div className="main__card-conteiner">
          {cards.map((card) => (
            <Card key={card.id} card={card} id={card.id} handlerRemoveCard={handlerRemoveCard} />
          ))}
          <CardsCreationForm setCards={setCards} cards={cards} handleAddCards={handleAddCards} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
