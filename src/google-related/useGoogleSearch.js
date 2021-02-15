import {useState, useEffect } from 'react';
import API_KEY from "./keys";

const CONTEXT_KEY = "191e0fcb464ae250e"; 

const useGoogleSearch= (term) => {
     const [data, setData] = useState(null);

     useEffect(() => {
         const fetchData = async() => {
            //fetch(`https://www.googleapis.com/customsearch/v1?keys=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            fetch( `https://cse.google.com/cse?keys=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            //fetch(`https://customsearch.googleapis.com/customsearch/v1?keys=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(res => {console.log(res)})
            //.then(res => res.type())
            .then(result => {
                setData(result)
             })
         }

         fetchData();

     }, [term])

     return { data }
};

export default useGoogleSearch;
