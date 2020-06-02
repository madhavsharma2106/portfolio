import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { orange, white, primaryFont } from "../../../utils";
import styled from "styled-components";

const baseStyles = `
  text-decoration: none;
  font-family: ${primaryFont};
`;

const StyledRouterLink = styled(RouterLink)`
  color: ${orange[100]};
  ${baseStyles}
`;

const StyledLink = styled.a`
  color: ${orange[100]};
  ${baseStyles}
`;

const SecondaryLink = styled(RouterLink)`
  color: ${white[100]};
  ${baseStyles}
  &:hover {
    color: ${orange[100]};
  }
`;

const TertiaryLink = styled(RouterLink)`
  color: ${white[100]};
  ${baseStyles}
  &:hover {
    color: ${orange[100]};
  }
`;

function Link({ children, to, secondary, tertiary }) {
  if (secondary) return <SecondaryLink to={to}>{children}</SecondaryLink>;
  if (tertiary) return <TertiaryLink to={to}>{children}</TertiaryLink>;

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
