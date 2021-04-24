import React from "react";
import { apiCall } from "../../api/mockedApi";
import Card from "./Card";
import "./cardConteiner.scss";
import { CardError } from "./CardsObject/CardError";

export default class CardsConteiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      isApiCallError: false,
    };
  }
  // static getDerivedStateFromError(error) {
  //   return { isApiCallError: true };
  // }

  componentDidMount() {
    apiCall()
      .then((data) => {
        this.setState({ cards: data.mockedResponce });
      })
      .catch((dataError) => {
        this.setState({ dataError, isApiCallError: true });
      });
  }

  render() {
    if (this.state.isApiCallError) {
      return <CardError error={this.state.dataError} />;
    } else {
      return (
        <div className="main__card-conteiner">
          {this.state.cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      );
    }
  }
}
