import React, { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../GlobalContext";
import MapVisual from "./MapVisual";

export default function Body() {
  const setCountry = useContext(GlobalContext)[1];
  const cases = useContext(GlobalContext)[2];
  const countries = useContext(GlobalContext)[0];
  const [query, setQuery] = useState("");

  console.log(useContext(GlobalContext));

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setCountry(query);

    setQuery("");
  };

  return (
    <Container>
      <header>
        <h2 style={{ color: "rgb(98, 54, 255)" }}>Covid-19 </h2>
        <h2 style={{ marginLeft: "10px", fontWeight: 300 }}>Global Trend</h2>
      </header>

      <div className="cases">
        <div className="aggregated">
          <header>Aggregated Confirmed</header>
          <main>{cases.confirmed}</main>
          <p>23%</p>
        </div>
        <div className="active">
          <header>Active Confirmed</header>
          <main>{cases.active}</main>
          <p>23%</p>
        </div>
        <div className="recovered">
          <header>Recovered</header>
          <main>{cases.recovered}</main>
          <p>23%</p>
        </div>
        <div className="death">
          <header>Death</header>
          <main>{cases.deaths}</main>
          <p>23%</p>
        </div>
      </div>

      <div className="statistic">
        <div className="city">
          <div className="inputLogo">
            <form action="" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Search Country"
                onChange={onChange}
                value={query}
              />
            </form>
          </div>
          <div className="listCity">
            <ul>
              {countries.map((data, index) => (
                <div className="Lists" key={index}>
                  <p>{data[1].today_confirmed}</p>
                  <li>{data[1].name}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="visualisasi">
          <MapVisual />
          <div className="diagram"></div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 65%;
  height: 100%;
  padding-left: 2vw;
  background: rgb(243, 252, 255);

  header {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .cases {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;

    .active,
    .aggregated,
    .recovered,
    .death {
      display: flex;
      height: 75%;
      width: 23%;
      background: white;
      border-radius: 1.5vw;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: 1s ease-in;
      header {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      main {
        font-size: 2vw;
      }

      p {
        font-size: 0.8vw;
      }
    }

    .aggregated main {
      color: rgb(253, 102, 132);
    }

    .active main {
      color: rgb(255, 155, 88);
    }

    .recovered main {
      color: rgb(157, 227, 82);
    }

    .death main {
      color: rgb(149, 117, 255);
    }
  }

  .statistic {
    height: 65%;
    width: 100%;
    background: white;
    display: flex;
    border-radius: 1vw;
    padding: 1.3vw;

    .city {
      display: flex;
      flex-direction: column;
      width: 30%;
      height: 100%;

      .inputLogo {
        display: flex;
        align-items: center;
        border-radius: 50px;
        width: 95%;
        height: 10%;
        background: rgb(0, 0, 0, 0.1);
        padding-left: 10px;

        input {
          border: none;
          background: none;
          outline: none;
          width: 100%;
          padding-left: 10px;
        }

        ::before {
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          content: "\f002";
        }
      }

      .listCity {
        overflow-y: scroll;
        padding: 0 1vw 0 1vw;
        height: 80%;
        margin-top: 10%;

        ul {
          font-size: 1vw;
          height: 100%;

          .Lists {
            display: flex;
            text-align: left;
            letter-spacing: 0.8px;
            margin-top: 1vh;
            p {
              min-width: 4vw;
            }

            li {
              list-style: none;
              padding-left: 1vw;
              color: rgb(0, 0, 0, 0.5);
            }
          }
        }
      }
    }

    .visualisasi {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding-left: 10px;
    }
  }
`;
