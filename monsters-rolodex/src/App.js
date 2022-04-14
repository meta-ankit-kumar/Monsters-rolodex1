import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { SEARCH_BUTTON } from "./shared/utils";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchQuery: '',
      isLoading: false
    };
  }

  sleep(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), time)
    });
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    })
    await this.sleep(3000);
    this.setState({
      isLoading: false
    })
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((users) =>
        this.setState({
          monsters: users
        })
      );
    }).catch(error => {
      console.log("Error", error)
    });
  }

  getListOfMonsters = () => {
    return this.state.monsters.filter(monster => {
     return monster.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    })
  }

  handleSearch = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }
  render() {
    if(this.state.isLoading)
      return (
        <div className="spinner-container">
          <div className="spinner"></div>
          <p>Loading Monsters</p>
        </div>
      );
    else{
      return (
        <div className="App">
          <div className="search-container">
            <SearchBox handleSearch={this.handleSearch} className={SEARCH_BUTTON.className} placeholder={SEARCH_BUTTON.placeholder}/>
          </div>
          <div className="card-container">
            <CardList monsters={this.getListOfMonsters()}/>
          </div>
        </div>
      )
    }
  }
}

export default App;
