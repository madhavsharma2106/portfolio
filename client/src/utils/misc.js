import styled, { css } from "styled-components";

export const enableMarginProps = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  margin,
}) => css`
  margin-top: ${marginTop && marginTop + "px"};
  margin-bottom: ${marginBottom && marginBottom + "px"};
  margin-left: ${marginLeft && marginLeft + "px"};
  margin-right: ${marginRight && marginRight + "px"};
  margin: ${margin && margin};
`;

export const enablePaddingProps = ({
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  padding,
}) => css`
  padding-top: ${paddingTop && paddingTop + "px"};
  padding-bottom: ${paddingBottom && paddingBottom + "px"};
  padding-left: ${paddingLeft && paddingLeft + "px"};
  padding-right: ${paddingRight && paddingRight + "px"};
  padding: ${padding && padding};
`;

export const checkIfPercentageOrPixel = (val) => {
  if (val[val.length - 1] === "%") return val;
  return `${val}px`;
};

export const enableHeightProps = ({ height }) =>
  height && `height: ${checkIfPercentageOrPixel(height)};`;

export const enableWidthProps = ({ width, maxWidth, minWidth }) => css`
  width: ${width && checkIfPercentageOrPixel(width)};
  max-width: ${maxWidth && checkIfPercentageOrPixel(maxWidth)};
  min-width: ${minWidth && checkIfPercentageOrPixel(minWidth)};
`;

// export const enableWidthProps = ({ width }) =>
// width && `width: ${checkIfPercentageOrPixel(width)};`;

export const Container = styled.div`
  max-width: 1173px;
  margin: 0 auto;
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${enableMarginProps}
  ${enablePaddingProps}
`;

export const enablePointer = ({ pointer }) => pointer && `cursor: pointer;`;

export const enableCss = ({ css }) => css;

export const meduimBreakpointStyles = (...styles) => {
  return `
    @media (max-width: 768px) {
        ${styles}
      } 
    `;
};

export const smallBreakpointStyles = (...styles) => {
  return `
    @media (max-width: 425px) {
        ${styles}
      } 
    `;
};
