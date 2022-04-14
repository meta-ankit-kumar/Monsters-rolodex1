import { Component } from "react";
class Card extends Component {
    render() {
        return (
            <div>
                <div className="monster-container">
                    <img src={`https://robohash.org/${this.props.monster.id}?set=set2`} alt={`Robot Image ${this.props.monster.id}`} />
                    <p>{this.props.monster.name}</p>
                    <p>{this.props.monster.email}</p>
                </div>
            </div>
        )
    }
}

export default Card;