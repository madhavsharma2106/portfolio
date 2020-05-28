import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { orange } from "../../../utils";
import styled from "styled-components";

const StyledRouterLink = styled(RouterLink)`
  color: ${orange[100]};
`;

const StyledLink = styled.a`
  color: ${orange[100]};
`;

function Link({ children, to }) {
  const pattern = /^((http|https|ftp):\/\/)/;
  if (pattern.test(to)) {
    return (
      <StyledLink href={to} target="_blank">
        {children}
      </StyledLink>
    );
  }

  return <StyledRouterLink to={to}>{children}</StyledRouterLink>;
}

export default Link;
