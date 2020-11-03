import React from "react";
import styled from "styled-components";

export default function Addition() {
  return <Container></Container>;
}

const Container = styled.div`
  width: 25%;
  height: 100%;
  background: lightblue;

  @media (max-width: 786px) {
    width: 100%;
    height: 30%;
  }
`;
