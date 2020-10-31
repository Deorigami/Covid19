import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../GlobalContext";

export default function Body() {
  const covData = useContext(GlobalContext);
  return (
    <Container>
      <header>
        <h2>Covid-19 </h2>
        <h2>Global Trend</h2>
      </header>

      <div className="cases">
        <div className="aggregated">aggregated</div>
        <div className="active">active</div>
        <div className="recovered">recovered</div>
        <div className="death">death</div>
      </div>

      <div className="statistic">
        <div className="city">
          <div className="inputLogo">
            <input type="text" />
          </div>
          <div className="nationCases"></div>
        </div>
        <div className="visualisasi">
          <div className="map"></div>
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
      border: 1px solid;
      display: flex;
      height: 75%;
      width: 23%;
      background: white;
      border-radius: 2vw;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }

  .statistic {
    height: 65%;
    width: 100%;
    background: white;
    border: solid black;
    display: flex;
    border-radius: 1vw;
    padding: 1.3vw;

    .city {
      display: flex;
      flex-direction: row;

      .inputLogo {
        display: flex;
        align-items: center;
        border-radius: 50px;
        width: 95%;
        height: 9%;
        background: rgb(0, 0, 0, 0.1);
        padding-left: 10px;

        input {
          border: none;
          background: none;
        }

        ::before {
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
          content: "\f002";
        }
      }
    }
  }
`;
