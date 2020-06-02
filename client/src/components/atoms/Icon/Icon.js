import React from "react";
import styled from "styled-components";

const IconStyle = styled.img`
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  cursor: pointer;
`;

function Icon() {
  return <IconStyle src={require("../../../assets/icons/github.svg")} />;
}

export default Icon;
