import styled, { css } from "styled-components";
import {
  primaryFont,
  secondaryFont,
  enableHeightProps,
  enableWidthProps,
  enablePaddingProps,
  enableMarginProps,
  enablePointer,
} from "../../../utils";

export const TextAlignVariants = {
  left: "left",
  right: "right",
  center: "center",
  justify: "justify",
};

export const FontWeightVariants = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const TextTransformVariants = {
  lowercase: "lowercase",
  uppercase: "uppercase",
  capitalize: "capitalize",
};

export const textStyles = css`
  margin: 0;
  font-family: ${({ secondary }) => (secondary ? secondaryFont : primaryFont)};
  font-size: ${({ size = 16 }) => `${size}px`};
  text-decoration: ${({ underlined }) => underlined && "underline"};
  display: ${({ inline }) => inline && "inline"};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  flex: ${({ flexSize }) => flexSize};
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-transform: ${({ textTransform }) => textTransform};
  ${enableHeightProps}
  ${enableWidthProps}
  ${enablePaddingProps}
  ${enableMarginProps}
  ${enablePointer}

`;

export const Text = styled.p`
  ${textStyles}
`;
export const H1 = styled.h1`
  ${textStyles}
  font-size: ${({ size = 45 }) => `${size}px`};

`;
export const H2 = styled.h2`
  ${textStyles}
`;
export const H3 = styled.h3`
  ${textStyles}
  font-size: ${({ size = 22 }) => `${size}px`};
`;
