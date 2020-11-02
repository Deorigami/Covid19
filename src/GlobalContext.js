import React, { useState, useEffect, createContext } from "react";

export const GlobalContext = createContext();

export const ContextProvider = (props) => {
  const [apiData, setApiData] = useState({}); // First Api Data
  const [countryList, setCountryList] = useState([]); // This is the global Data of Covid 19
  const [country, setCountry] = useState("Indonesia");
  const [fullData, setFullData] = useState({
    confirmed: "",
    active: "",
    recovered: "",
    deaths: "",
  });
  const [isError, setError] = useState(false);

  const today = new Date();

  const fullDate =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    (fullData ? today.getDate() - 1 : today.getDate());

  useEffect(() => {
    const fetchData = async () => {
      if (country === "") {
        return;
      }
      const covData = await fetch(
        `https://api.covid19tracking.narrativa.com/api/${fullDate}/country/${country}`
      )
        .then((res) => {
          if (res.ok === false) {
            throw new Error();
          }
          setError(res.ok);
          return res.json();
        })
        .then((data) => {
          let cases = Object.entries(
            Object.entries(data.dates)[0][1].countries
          )[0][1];

          setFullData((prev) => ({
            ...prev,
            confirmed: cases.today_confirmed,
            recovered: cases.today_recovered,
            deaths: cases.today_deaths,
            active:
              cases.today_confirmed -
              cases.today_recovered -
              cases.today_deaths,
          }));
          return data.dates;
        })
        .catch((err) => {
          setError(false);
        });

      covData &&
        (await setApiData(
          Object.entries(Object.entries(covData)[0][1].countries)[0][1]
        ));
    };

    (async function () {
      await fetch(`https://api.covid19tracking.narrativa.com/api/${fullDate}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else throw Error("Error Brow");
        })
        .then((data) => {
          const GlobalData = Object.entries(
            Object.entries(data.dates[`2020-11-01`])[0][1]
          );
          setCountryList(GlobalData);
        });
    })();

    fetchData();
  }, [country, fullDate]);

  return (
    <GlobalContext.Provider
      value={[apiData, countryList, setCountry, fullData, isError]}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
