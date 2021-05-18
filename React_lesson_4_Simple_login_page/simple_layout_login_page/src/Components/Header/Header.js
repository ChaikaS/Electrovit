import "./header.scss";
import contentImages from "../../Image/Volkswagen_logo.jpg";

export default function Header(props) {
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
  return (
    <header>
      <div className="header">{`${store.user.firstName} ${store.user.lastName}`}</div>
      <div className="header__image">{store.avatar.image}</div>
      <div className="header__alt">{`${store.avatar.alt}`}</div>
    </header>
  );
}
