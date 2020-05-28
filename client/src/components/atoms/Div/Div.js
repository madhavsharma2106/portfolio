import styled from "styled-components";
import { enableMarginProps, enablePaddingProps } from "../../../utils";

const baseStyles1 = {
  flexEnd: "flex-end",
  flexStart: "flex-start",
  center: "center",
  end: "end",
};

export const JustifyContentVariants = {
  spaceBetween: "space-between",
  spaceAround: "space-around",
  ...baseStyles1,
};

export const AlignItemsVariants = {
  baseline: "baseline",
  ...baseStyles1,
};

export const Div = styled.div`
  display: ${({ flex }) => flex && "flex"};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${enablePaddingProps}
  ${enableMarginProps}
`;
