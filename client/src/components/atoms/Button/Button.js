import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import {
  typeScale,
  primaryFont,
  orange,
  white,
  tealGreen,
} from "../../../utils/index";

export const PRIMARY_BUTTON_MODIFIERS = {};

const Button = styled.button`
  padding: 14px 60px;
  font-size: ${typeScale.paragraph1};
  font-family: ${primaryFont};
  cursor: pointer;
  font-weight: 500;
  color: ${white[100]};
  border: 1px solid transparent;
  transition: background-color 0.07s linear, color 0.07s linear;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${orange[100]};

  &:hover {
    background-color: ${white[100]};
    color: ${orange[100]};
    border-color: ${orange[100]};
  }
  ${applyStyleModifiers(PRIMARY_BUTTON_MODIFIERS)};
`;

export const SECONDARY_BUTTON_MODIFIERS = {
  tealText: () => `
    color: ${tealGreen[100]};
    border-color: ${tealGreen[100]};

    &:hover {
      background-color: ${tealGreen[100]};
      color: ${white[100]};
    }
  `,
};

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${orange[100]};
  border-color: ${orange[100]};

  &:hover {
    background-color: ${orange[100]};
    color: ${white[100]};
  }

  ${applyStyleModifiers(SECONDARY_BUTTON_MODIFIERS)};
`;

export const TERTIARY_BUTTON_MODIFIERS = {};

export const TertialryButton = styled(Button)`
  background-color: transparent;
  color: ${orange[100]};

  &:hover {
    background-color: ${white[100]};
    color: ${orange[100]};
    border-color: ${orange[100]};
  }

  ${applyStyleModifiers(TERTIARY_BUTTON_MODIFIERS)};
`;
