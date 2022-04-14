import { Component } from "react";
import './search-box.css'

class SearchBox extends Component {
    render() {
        return (
            <input type="search" name="search" className={this.props.className}  onInput={this.props.handleSearch} placeholder={this.props.placeholder}/>
        )
    }
}

export default SearchBox;