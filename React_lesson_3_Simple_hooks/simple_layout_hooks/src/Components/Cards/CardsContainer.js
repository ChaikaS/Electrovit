import React, { useEffect, useState } from "react";
import { apiCall } from "../../api/mockedApi";
import Card from "./Card";
import "./cardConteiner.scss";
import { CardError } from "./CardsObject/CardError";
import CardsCreationForm from "./CardsObject/CardsCreationForm";

export default function CardsConteiner(props) {
  const [cards, setCards] = useState([]);

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

  const handlerRemoveCard = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("id");
    setCards(cards.filter((item) => item.id !== id));
  };

  const handleAddCards = (newObject) => {
    setCards([...cards, newObject]);
  };

  return (
    <div onSubmit={handleError}>
      {setIsApiCallError ? <CardError error={isApiCallError.dataError} /> : null}

      <div className="main__card-conteiner">
        {cards.map((card) => (
          <Card key={card.id} card={card} handlerRemoveCard={handlerRemoveCard} id={card.id} />
        ))}

        <CardsCreationForm setCards={setCards} cards={cards} handleAddCards={handleAddCards} />
      </div>
    </div>
  );
}

// const [isApiCallError, setIsApiCallError] = useState(false);

// (<div>{isApiCallError ? <CardError /> : null}</div>),

// export default class CardsConteiner extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cards: [],
//       isApiCallError: false,
//     };
//   }

//   componentDidMount() {
//     apiCall()
//       .then((data) => {
//         this.setState({ cards: data.mockedResponce });
//       })
//       .catch((dataError) => {
//         this.setState({ dataError, isApiCallError: true });
//       });
//   }

//   render() {
//     if (this.state.isApiCallError) {
//       return <CardError error={this.state.dataError} />;
//     } else {
//       return (
//         <div className="main__card-conteiner">
//           {this.state.cards.map((card) => (
//             <Card key={card.id} card={card} />
//           ))}

//           <CardsCreationForm />
//         </div>
//       );
//     }
//   }
// }
