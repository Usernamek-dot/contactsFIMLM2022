import { Card } from "./components/Card";
import profile from "./assets/profilePic.svg";
import { useEffect, useState } from "react";
import { Search } from "./components/Search";
import { Header } from "./components/Header";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    contacts();
  }, []);

  const contacts = async () => {
    const resp = await fetch("https://randomuser.me/api/?results=10");
    const data = await resp.json();
    setUsers(data.results);
  };
  return (
    <>
      <Header />
      <Search />
      {/* filter */}
      {users
        .filter((user) => {
          if (search === "") {
            return user;
          } else if (
            user.name.first.toLowerCase().includes(search.toLowerCase()) ||
            user.name.last.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.phone.toLowerCase().includes(search.toLowerCase()) ||
            user.cell.includes(search)
          ) {
            return user;
          }
        })
        .map((user) => (
          <Card
            key={user.email}
            image={user.picture.large}
            contact={`${user.name.first} ${user.name.last}`}
            phone={user.phone}
            email={user.email}
          />
        ))}
    </>
  );
}

export default App;
