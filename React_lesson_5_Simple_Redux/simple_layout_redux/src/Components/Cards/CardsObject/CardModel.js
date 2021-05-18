import "../card.scss";
import { removeCards } from "../../../store/actions/cardsActions";
import { useDispatch } from "react-redux";

export default function CardModel({ model, handlerRemoveCard, id }) {
  const dispatch = useDispatch();

  return (
    <div className="main__card-model">
      <div>{model}</div>
      <button id={id} onClick={handlerRemoveCard}>
        x
      </button>
    </div>
  );
}
