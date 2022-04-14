import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { SEARCH_BUTTON } from "./shared/utils";
import { sleep } from "./shared/util";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    const filteredMonstersList = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredMonsters(filteredMonstersList);
  }, [monsters, searchQuery]);

  useEffect(() => {
    setIsLoading(true);
    sleep(3000).then(res1 => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          res.json().then((users) => {
            setMonsters(users);
          });
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }, []);
  }, []);

  useEffect(() => setIsLoading(!isLoading), [monsters])

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p>Loading Monsters</p>
      </div>
    );
  }
  return (
    <div className="App">
      <div className="search-container">
        <SearchBox
          handleSearch={handleSearch}
          className={SEARCH_BUTTON.className}
          placeholder={SEARCH_BUTTON.placeholder}
        />
      </div>
      <div className="card-container">
        <CardList monsters={filteredMonsters} />
      </div>
    </div>
  );
};

export default App;
