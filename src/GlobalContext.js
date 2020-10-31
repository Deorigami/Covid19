import React, { useState, useEffect, createContext } from "react";

export const GlobalContext = createContext();

export const ContextProvider = (props) => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const dataFetch = await fetch(
        "https://api.covid19tracking.narrativa.com/api/2020-03-22/country/spain"
      ).then((res) => res.json());

      setApiData(dataFetch.dates["2020-03-22"].countries);
    };
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={apiData}>
      {props.children}
    </GlobalContext.Provider>
  );
};
