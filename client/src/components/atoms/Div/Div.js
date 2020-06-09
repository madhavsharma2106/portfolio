import styled from "styled-components";
import {
  enableMarginProps,
  enablePaddingProps,
  enableHeightProps,
  enableWidthProps,
  enablePointer,
  enableCss,
} from "../../../utils";

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

export const FlexDirectionVariants = {
  row: "row",
  column: "column",
  rowReverse: "row-reverse",
  columnReverse: "column-reverse",
};

export const Div = styled.div`
  color: ${({ color }) => color};
  display: ${({ flex }) => flex && "flex"};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${enablePaddingProps}
  ${enableMarginProps}
  ${enableHeightProps}
  ${enableWidthProps}
  ${enablePointer}
  flex: ${({ flexSize }) => flexSize};
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${enableCss}
`;
