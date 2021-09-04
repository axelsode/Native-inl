import { useState, useEffect } from "react";
import yelp from "../api/yelp";
import data from "../../response-data-export.json";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("test");
    setResults(data.businesses);
    // try {
    //     const response = await yelp.get('/search', {

    //         params: {
    //             limit: 50,
    //             term: searchTerm,
    //             location: 'Stockholm'
    //         }
    //     });
    //     setResults(response.data.businesses);
    // } catch (err) {
    //     setErrorMessage('Something went wrong')
    // }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
