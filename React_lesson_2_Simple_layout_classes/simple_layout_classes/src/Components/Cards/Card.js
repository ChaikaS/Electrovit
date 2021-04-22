import CardEngine from "./CardsObject/CardEngine";
import CardTitle from "./CardsObject/CardTitle";
import CardModel from "./CardsObject/CardModel";
import CardImageUrl from "./CardsObject/CardImageUrl";
// import contentImages from "../../Image/Volkswagen_logo.jpg";

export default function Card({ card }) {
  const model = card.model;
  const title = card.title;
  const imageUrl = card.imageUrl;
  const engine = card.engine;
  const image = <img src={imageUrl} alt={""} />;
  const image2 = { image: image };
  console.log(imageUrl);

  return (
    <div>
      <CardModel model={model} />
      <CardTitle title={title} />
      <CardImageUrl image={image2} />
      <CardEngine engine={engine} />
    </div>
  );
}
