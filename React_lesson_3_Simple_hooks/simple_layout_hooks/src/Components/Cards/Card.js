import "./card.scss";
import CardEngine from "./CardsObject/CardEngine";
import CardTitle from "./CardsObject/CardTitle";
import CardModel from "./CardsObject/CardModel";
import CardImageUrl from "./CardsObject/CardImageUrl";

export default function Card({ card, handlerRemoveCard, id }) {
  const model = card.model;
  const title = card.title;
  const imageUrl = card.imageUrl;
  const engine = card.engine;

  console.log(model);
  console.log(title);
  console.log(imageUrl);
  console.log(engine);

  return (
    <div className="main__card">
      <CardModel model={model} handlerRemoveCard={handlerRemoveCard} id={id} />
      <CardTitle title={title} />
      <CardImageUrl image={imageUrl} />
      <CardEngine engine={engine} />
    </div>
  );
}
