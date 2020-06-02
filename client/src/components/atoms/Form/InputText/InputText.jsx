import styled from "styled-components";
import {
  enableMarginProps,
  secondaryFont,
  primaryFont,
} from "../../../../utils";

export const InputText = styled.input`
  font-family: ${({ secondary }) => (secondary ? secondaryFont : primaryFont)};
  padding: 13px 32px;
  ${enableMarginProps}
`;
