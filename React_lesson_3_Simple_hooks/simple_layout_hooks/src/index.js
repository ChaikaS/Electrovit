import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.scss";
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";
import contentImages from "./Image/Volkswagen_logo.jpg";

const image = <img src={contentImages} alt={""} />;
const store = {
  user: {
    firstName: "Volkswagen",
    lastName: "Passat",
  },
  avatar: {
    image: image,
    alt: "The B3 Passat was heavily facelifted in 1993, and despite being designated B4, it was not an all-new model. The facelift resulted in every external body panel being changed, except for the roof and glasshouse, with most obvious exterior change seeing the reintroduction of a grille to match the style of the other same-generation Volkswagen models of the era, such as the Mk3 Golf and Jetta. The interior was mildly updated and included safety equipment such as dual front airbags and seat belt pretensioners, although the basic dashboard design remained unchanged. The B4 sedan was replaced in late 1996 by the new B5 Passat.",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App userDate={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
