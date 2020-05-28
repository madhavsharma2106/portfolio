import styled from "styled-components";
import { primaryFont, black, secondaryFont } from "../../../utils";

export const TextAlignVariants = {
  left: "left",
  right: "right",
  center: "center",
};

export const FontWeightVariants = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const Text = styled.p`
  font-family: ${({ secondary }) => (secondary ? secondaryFont : primaryFont)};
  font-size: ${({ size = 16 }) => `${size}px`};
  text-decoration: ${({ underlined }) => underlined && "underline"};
  display: ${({ inline }) => inline && "inline"};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color = black[100] }) => color};
`;
