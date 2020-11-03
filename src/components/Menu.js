import React from "react";
import styled from "styled-components";

export default function Menu() {
  return <Container></Container>;
}

const Container = styled.div`
  width: 10%;
  height: 100%;
  background: #6236ff;

  @media (max-width: 786px) {
    width: 100%;
    height: 7%;
  }
`;
