import "../card.scss";

export default function CardModel({ model, handlerRemoveCard, id }) {
  return (
    <div className="main__card-model">
      <div>{model}</div>
      <button id={id} onClick={handlerRemoveCard}>
        x
      </button>
    </div>
  );
}
