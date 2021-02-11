import React from 'react';
import "./SearchPage.css";
import { useStateValue } from "../contextAPI/StateProvider";
import useGoogleSearch from '../google-related/useGoogleSearch';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <h1>{term}</h1>
            </div>
            <div className="searchPage__results">

            </div>
        </div>
    )
}

export default SearchPage
