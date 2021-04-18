import Header from "./Header";
import UserInfo from "./UserInfo";

export default function HomePage() {
  const user = {
    firstName: "Sergei",
    lastName: "Chaikovsky",
  };
  return (
    <div>
      <Header />
      <UserInfo user={user} />
    </div>
  );
}
