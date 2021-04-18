import "./content.scss";

export default function Content({ avatar }) {
  return (
    <main className="content">
      <div className="content-image">{avatar.image}</div>
      <div className="content-alt">{`${avatar.alt}`}</div>
    </main>
  );
}
