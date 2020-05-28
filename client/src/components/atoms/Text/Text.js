import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import {
  primaryFont,
  white,
  black,
  secondaryFont,
  tealGreen,
  orange,
} from "../../../utils";

export const TEXT_BUTTON_MODIFIERS = {};

export const ColorVariant = {
  grey: black[300],
  secondaryBlack: black[200],
  black: black[100],
  orange: orange[100],
  tealGreen: tealGreen[100],
  white: white[100],
};

export const Text = styled.p`
  font-family: ${({ secondary }) => (secondary ? secondaryFont : primaryFont)};
  color: ${black[100]};
  font-size: ${({ size = 16 }) => `${size}px`};
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  font-weight: ${({ weight }) => weight};
  color: ${({ color = ColorVariant.black }) => color};
`;
