import { useState } from "react";
import './SearchBar.css';

function SearchBar( {onSubmit} ) {
    //create and set state for search
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    //create an even handler to watch for change pass the event object
    const handleChange = (event) => {

        //set state
        setTerm(event.target.value);

    };
    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;
