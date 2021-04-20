import React from "react";
import { apiCall } from "../api/mockedApi";
import Card from "./Card";

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
    console.log(this.state);

    return (
      <div>
        {this.state.cards.map((card) => (
          <Card key={card.id} model={card} />
        ))}
      </div>
    );
  }
}
