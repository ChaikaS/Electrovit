import "./header.scss";

export default function Header({ user }) {
  return (
    <header>
      <div className="header">{`${user.firstName} ${user.lastName}`}</div>
    </header>
  );
}
