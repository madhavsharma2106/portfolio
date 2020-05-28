import styled from "styled-components";
export const Container = styled.div`
  width: 1173px;
  margin: 0 auto;
`;

export const enableMarginProps = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  margin,
}) => `
    margin-top: ${marginTop && marginTop}px;
    margin-bottom: ${marginBottom && marginBottom}px;
    margin-left: ${marginLeft && marginLeft}px;
    margin-right:  ${marginRight && marginRight}px;
    margin: ${margin && margin};
  `;

export const enablePaddingProps = ({
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  padding,
}) => `
      padding-top: ${paddingTop && paddingTop}px;
      padding-bottom: ${paddingBottom && paddingBottom}px;
      padding-left: ${paddingLeft && paddingLeft}px;
      padding-right:  ${paddingRight && paddingRight}px;
      padding: ${padding && padding};
    `;
