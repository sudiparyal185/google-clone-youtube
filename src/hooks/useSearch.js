import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1";

const API_KEY = process.env.REACT_APP_SEARCH_KEY;
const SEARCH_ENGINE_KEY = process.env.REACT_APP_SEARCH_ENGINE_KEY;

const useSearch = (searchTerm) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&cx=${SEARCH_ENGINE_KEY}&q=${searchTerm}`
      );
      setData(response?.data);
    };
    fetchData();
  }, [searchTerm]);
  return {
    data,
  };
};

export default useSearch;
