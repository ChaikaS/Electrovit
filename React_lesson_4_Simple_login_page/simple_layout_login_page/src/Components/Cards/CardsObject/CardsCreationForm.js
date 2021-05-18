import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../card.scss";

export default function CardsCreationForm(props) {
  const [values, setValues] = useState({
    model: "",
    title: "",
    imageUrl: "",
    engine: "",
  });

  const handleCardsInputChange = (e) => {
    e.persist();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const newObject = {
    id: `${uuidv4()}`,
    model: `${values.model}`,
    title: `${values.title}`,
    imageUrl: `${values.imageUrl}`,
    engine: `${values.engine}`,
  };

  const handleChange = (e) => {
    if (values.model && values.title && values.imageUrl && values.engine) {
      e.preventDefault();
      props.handleAddCards(newObject);
      setValid(true);
      setShowClickButton(true);
      setValues({
        model: "",
        title: "",
        imageUrl: "",
        engine: "",
      });
    } else {
      setValid(false);
      setShowClickButton(false);
    }
  };

  const [valid, setValid] = useState(false);

  const [showClickButton, setShowClickButton] = useState(false);

  return (
    <div className="main__create-card">
      {
        <form className="main__create-card_form">
          {showClickButton && valid ? <div className="success-message">Success! You added new cards. You can added new card</div> : null}
          {!showClickButton && !valid ? <div className="success-message">Created a new cards</div> : null}
          <input type="text" value={values.model} placeholder={"model"} name="model" onChange={handleCardsInputChange} />

          {showClickButton && valid && !values.model ? (
            <div className="main__create-card_text-error" id="model-error">
              Please enter a model
            </div>
          ) : null}
          <input type="text" value={values.title} placeholder={"title"} name="title" onChange={handleCardsInputChange} />
          {showClickButton && valid && !values.title && (
            <div className="main__create-card_text-error" id="title-error">
              Please enter a title
            </div>
          )}
          <input type="text" value={values.imageUrl} placeholder={"imageUrl"} name="imageUrl" onChange={handleCardsInputChange} />
          {showClickButton && valid && !values.imageUrl && (
            <div className="main__create-card_text-error" id="imageUrl-error">
              Please enter a imageUrl
            </div>
          )}
          <input type="text" value={values.engine} placeholder={"engine "} name="engine" onChange={handleCardsInputChange} />
          {showClickButton && valid && !values.engine && (
            <div className="main__create-card_text-error" id="engine-error">
              Please enter a engine
            </div>
          )}

          <button className="main__create-card_button" onClick={handleChange}>
            Click
          </button>
        </form>
      }
    </div>
  );
}
