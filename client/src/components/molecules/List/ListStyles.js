import styled, { css } from "styled-components";
import { textStyles } from "../../atoms/Text/Text";
import { enablePaddingProps, enableMarginProps } from "../../../utils";

export const Li = styled.li`
  ${textStyles}
`;

const listStyles = css`
  margin: 0;
  ${enablePaddingProps}
  ${enableMarginProps}
  li {
    margin-top: 7px;
  }
`;

export const Ul = styled.ul`
  ${listStyles}
`;
export const Ol = styled.ol`
  ${listStyles}
`;
