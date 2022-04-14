import './search-box.css'
const SearchBox = (props) => {
    return (
        <input type="search" name="search" className={props.className}  onInput={props.handleSearch} placeholder={props.placeholder}/>
    )
}

export default SearchBox;