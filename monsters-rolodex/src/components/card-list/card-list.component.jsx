import { Component } from "react";
import Card from "../card/card.component";
import './card-list.css';

class CardList extends Component {
    render() {
        return (
            this.props.monsters.map((monster) => {
                return (
                  <Card monster={monster} key={monster.id}/>
                )
              }));
    }
}

export default CardList;