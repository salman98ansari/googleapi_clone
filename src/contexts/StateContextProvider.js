import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setLoading(true);
    const response = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "c9dd555cdemsh6013186e304fb79p184025jsn4b7aad0c03b6",
      },
    });

    const data = await response.json();

    if (url.includes("/news")) {
      setResults(data.entries);
    } else if (url.includes("/images")) {
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }
    console.log(data);
    // setResults(data);
    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, loading, searchTerm, setSearchTerm }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
