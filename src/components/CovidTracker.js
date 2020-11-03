import React from "react";
import styled from "styled-components/macro";
import Addition from "./Addition";
import Body from "./Body";
import Menu from "./Menu";

function CovidTracker() {
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
  height: 90%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
