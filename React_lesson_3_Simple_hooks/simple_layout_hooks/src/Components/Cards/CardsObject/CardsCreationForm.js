import React, { useCallback, useEffect, useState } from "react";
import { mockedResponce } from "../../../api/mockedResponce";
import Card from "../Card";
import CardsConteiner from "../CardsContainer";

export default function CardsCreationForm({ setCards }) {
  const [values, setValues] = useState({
    model: "",
    title: "",
    imageUrl: "",
    engine: "",
  });

  const handleModelInputChange = (e) => {
    e.persist();
    setValues({
      ...values,
      model: e.target.value,
    });
  };
  const handleTitleInputChange = (e) => {
    e.persist();
    setValues({
      ...values,
      title: e.target.value,
    });
  };
  const handleImageUrlInputChange = (e) => {
    e.persist();
    setValues({
      ...values,
      imageUrl: e.target.value,
    });
  };
  const handleEngineInputChange = (e) => {
    e.persist();
    setValues({
      ...values,
      engine: e.target.value,
    });
  };

  const newObject = {
    id: `${values.title + values.model}`,
    model: `${values.model}`,
    title: `${values.title}`,
    imageUrl: `${values.imageUrl}`,
    engine: `${values.engine}`,
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (values.model && values.title && values.imageUrl && values.engine) {
      setValid(true);
      setShowClickButton(true);
      mockedResponce.push(newObject);
      setCards(mockedResponce);
    } else {
      setValid(false);
      setShowClickButton(false);
      setCards(mockedResponce);
    }
  };

  const [valid, setValid] = useState(false);

  const [showClickButton, setShowClickButton] = useState(false);

  console.log(newObject);
  console.log(mockedResponce);

  // export default function CardRemove({ setCards }) {
  //   const [list, setList] = useState(mockedResponce);
  //   const handlerRemoveCard = (e) => {
  //     const delValues = e.target.getAttribute("model");
  //     setList(list.filter((item) => item.delValues !== delValues));
  //   };
  //   <div>
  //     {list.map((item) => {
  //       return (
  //         (
  //           <span delValues={item.delValues} onClick={handlerRemoveCard}>
  //             xzxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  //           </span>
  //         ),
  //         (<span>{item.delValues}</span>)
  //       );
  //     })}
  //   </div>;

  //   return <span>123</span>;
  // }

  // const [list, setList] = useState(setCards(mockedResponce));
  // console.log(list);

  return (
    <div className="main__create-card">
      {
        <form onSubmit={handleForm}>
          {showClickButton && valid ? <div className="success-message">Success! You added new cards. You can added new card</div> : null}
          {!showClickButton && !valid ? <div className="success-message">Created a new cards</div> : null}

          <input type="text" value={values.model} placeholder={"model"} name="model" onChange={handleModelInputChange} />
          {showClickButton && valid && !values.model ? <span id="model-error">Please enter a model</span> : null}
          <br />
          <input type="text" value={values.title} placeholder={"title"} name="title" onChange={handleTitleInputChange} />
          {showClickButton && valid && !values.title && <span id="title-error">Please enter a title</span>}
          <br />
          <input type="text" value={values.imageUrl} placeholder={"imageUrl"} name="imageUrl" onChange={handleImageUrlInputChange} />
          {showClickButton && valid && !values.imageUrl && <span id="imageUrl-error">Please enter a imageUrl</span>}
          <br />
          <input type="text" value={values.engine} placeholder={"engine "} name="engine" onChange={handleEngineInputChange} />
          {showClickButton && valid && !values.engine && <span id="engine-error">Please enter a engine</span>}
          <br />
          <button onClick={() => setCards([mockedResponce])}>Click</button>
        </form>
      }
    </div>
  );
}
