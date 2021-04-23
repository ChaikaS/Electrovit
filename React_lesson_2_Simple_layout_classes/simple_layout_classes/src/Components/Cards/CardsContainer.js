import React from "react";
import { apiCall } from "../api/mockedApi";
import Card from "./Card";
import "./cardConteiner.scss";

export default class CardsConteiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  componentDidMount() {
    apiCall()
      .then((data) => {
        return data;
      })
      .then((data) => {
        this.setState({ cards: data.mockedResponce });
      });
  }

  render() {
    return (
      <div className="main__card-conteiner">
        {this.state.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}
