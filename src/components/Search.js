import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";
import { useStateValue } from '../contextAPI/StateProvider';
import { actionTypes } from '../contextAPI/reducer';

function Search( {placeholder}) {
    const[{}, dispatch] = useStateValue();

    const history = useHistory();
    const [input, setInput] = useState ('')


    const search=e=>{
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
        history.push('/search');
    }
    return (
        <div className="search">     
            <form onSubmit={search}>
                <input 
                    value={input}
                    onChange={e=> setInput(e.target.value)}
                    className="search__input"
                    placeholder= {placeholder}
                />
                <SearchIcon className="search__icon"/> 
                <button
                    type="submit"></button>
            </form>   
        </div>
    )
}

export default Search
