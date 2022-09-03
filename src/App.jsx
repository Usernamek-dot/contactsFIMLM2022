import { Card } from "./components/Card";
import profile from "./assets/profilePic.svg";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    contacts();
  }, []);

  const contacts = async () => {
    const [users, setUsers] = useState([]);

    const resp = await fetch(
      "https://randomuser.me/api/?results=3/?gender=male"
    );
    const data = await resp.json();
    setUsers(data.results);
  };
  return (
    <>
      {users.map((user) => (
        <Card
          key={user.email}
          image={user.image.large}
          contact={`${user.name.first} ${user.name.last}`}
          phone={user.phone}
          email={user.email}
        />
      ))}
    </>
  );
}

{
}

export default App;
