import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { primaryFont } from "./typography";

export default createGlobalStyle`
${normalize()}
@font-face {
    font-family: "popins";
    src: url(../assets/fonts/Poppins-Regular.ttf) format("truetype") regular,
      url(../assets/fonts/Poppins-Bold.ttf) format("truetype") bold,
      url(../assets/fonts/Poppins-Light.ttf) format("truetype") light,
      url(../assets/fonts/Poppins-Medium.ttf) format("truetype") medium,
      url(../assets/fonts/Poppins-SemiBold.ttf) format("truetype") semibold;
  }
  
  @font-face {
    font-family: "helvetica";
    src: url(../assets/fonts/HelveticaNeueBold.ttf) format("truetype") bold,
      url(../assets/fonts/HelveticaNeue.ttf) format("truetype") regular;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 65px 0 0;
    font-family: ${primaryFont}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  main {
    width: 90%;
    margin: 0 auto;
  }
`;
