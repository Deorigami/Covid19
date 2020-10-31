import React, { useState, useEffect, createContext } from "react";

export const GlobalContext = createContext();

export const ContextProvider = (props) => {
  const [apiData, setApiData] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [country, setCountry] = useState("");

  const d = new Date();

  const fullDate = `${d.getDate}-${d.getMonth}-${d.getFullYear}`;

  console.log(fullDate);

  useEffect(() => {
    const fetchData = async () => {
      const dataFetch = await fetch(
        "https://api.covid19tracking.narrativa.com/api/2020-03-22/country/spain"
      ).then((res) => res.json());

      // setApiData(dataFetch.dates[`${fullDate}`].countries[`${country}`]);
    };
    fetchData();

    const countryNames = async () => {
      const fetchCountry = await fetch(
        "https://restcountries.eu/rest/v2/all"
      ).then((res) => res.json());

      setCountryList(fetchCountry);
    };
    countryNames();
  }, []);

  return (
    <GlobalContext.Provider value={[apiData, countryList, setCountry]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
