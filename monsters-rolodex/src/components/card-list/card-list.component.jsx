import Card from "../card/card.component";
import './card-list.css';

const CardList = ({ monsters }) => {
  return (
    monsters.map((monster) => {
        return (
          <Card monster={monster} key={monster.id}/>
        )
      }));
}

export default CardList;