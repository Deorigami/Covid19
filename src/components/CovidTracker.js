import React, { useContext } from "react";
import styled from "styled-components/macro";
import { GlobalContext } from "../GlobalContext";
import Addition from "./Addition";
import Body from "./Body";
import Menu from "./Menu";

function CovidTracker() {
  const CovData = useContext(GlobalContext);

  return (
    <Container>
      <Menu />
      <Body />
      <Addition />
    </Container>
  );
}

export default CovidTracker;

const Container = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
`;
