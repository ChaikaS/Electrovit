import CardEngine from "./CardsObject/CardEngine";
import CardTitle from "./CardsObject/CardTitle";
import CardModel from "./CardsObject/CardModel";
import CardImageUrl from "./CardsObject/CardImageUrl";

export default function Card({ card }) {
  const model = card.model;
  const title = card.title;
  const imageUrl = card.imageUrl;
  const engine = card.engine;
  console.log(model);

  console.log(imageUrl);

  return (
    <div>
      <CardModel model={model} />
      <CardTitle title={title} />
      <CardImageUrl image={imageUrl} />
      <CardEngine engine={engine} />
    </div>
  );
}
