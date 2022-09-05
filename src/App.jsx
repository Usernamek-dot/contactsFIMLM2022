import { Card } from "./components/Card";
import { useEffect, useState } from "react";
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
      <div className="justify-center ">
        <div className="p-5 flex flex-row-reverse  input-group relative items-stretch  mb-3 mt-4 xl:w-96">
          <input
            type="search"
            className="basis-1/4 form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {users

        .filter((user) => {
          if (search === "") {
            return user;
          } else if (
            user.name.first.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.cell.includes(search)
          ) {
            return user;
          }
        })
        .map((user) => (
          <Card key={user.email}>
            <img
              class=" w-80 h-80 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={user.picture.large}
            />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                {`${user.name.first} ${user.name.last}`}
              </h5>
              <p class="text-gray-700 text-base mb-4">{user.phone}</p>
              <p class="text-gray-600 text-xs">{user.email}</p>
            </div>
          </Card>
        ))}
    </>
  );
}

export default App;
