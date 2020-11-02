import React, { useState, useEffect, createContext } from "react";

export const GlobalContext = createContext();

export const ContextProvider = (props) => {
  const [countryList, setCountryList] = useState([]); // This is the global Data of Covid 19
  const [country, setCountry] = useState("Indonesia"); // query for country that inputed to the input box
  const [fullData, setFullData] = useState({
    confirmed: "",
    active: "",
    recovered: "",
    deaths: "",
  });

  const today = new Date();

  const fullDate =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    (today.getDate() - 1);

  useEffect(() => {
    (async function () {
      await fetch(`https://api.covid19tracking.narrativa.com/api/${fullDate}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else throw Error("Error Brow");
        })
        .then((data) => {
          // setting the Total cases Globally
          console.log(data.total);
          const TotalCases = data.total;

          setFullData((prev) => ({
            ...prev,
            confirmed: TotalCases.today_confirmed,
            recovered: TotalCases.today_recovered,
            deaths: TotalCases.today_deaths,
            active:
              TotalCases.today_confirmed -
              TotalCases.today_recovered -
              TotalCases.today_deaths,
          }));

          const GlobalData = Object.entries(
            Object.entries(Object.entries(data.dates)[0][1])[0][1]
          );

          setCountryList(GlobalData);
        })
        .catch((err) => console.log(err));
    })();
  }, [country, fullDate]);

  return (
    <GlobalContext.Provider value={[countryList, setCountry, fullData]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
