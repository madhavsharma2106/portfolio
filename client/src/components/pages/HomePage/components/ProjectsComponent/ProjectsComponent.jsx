import React from "react";
import {
  Container,
  tealGreen,
  white,
  meduimBreakpointStyles,
} from "../../../../../utils";
import {
  H1,
  Div,
  Text,
  H3,
  TertiaryButton,
  JustifyContentVariants,
  TextAlignVariants,
  Img,
} from "../../../../atoms";
function ProjectsComponent() {
  return (
    <Div
      backgroundColor={tealGreen[100]}
      paddingTop="80"
      paddingBottom="80"
      css={[meduimBreakpointStyles(`padding: 50px`)]}
    >
      <Container>
        <H1 color={white[100]} size="48" underlined marginBottom="20">
          This is my sandbox. <br /> I create sandcastles here.
        </H1>
        <Div
          flex
          justifyContent={JustifyContentVariants.spaceBetween}
          modifiers="medium"
          css={[meduimBreakpointStyles(`flex-direction: column`)]}
        >
          <Div marginRight="20" flexSize={1} pointer>
            <Div color={white[100]}>
              <Img
                src={require("../../../../../assets/Images/Projects/Project-1.jpg")}
              />
              <Div marginBottom="10">
                <H3 inline>Boli //</H3>
                <Text marginLeft="5" inline size="22">
                  The Language
                </Text>
              </Div>
              <Text align={TextAlignVariants.justify} lineHeight="1.44">
                A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers.
              </Text>
            </Div>
          </Div>
          <Div marginRight="20" flexSize={1} pointer>
            <Div color={white[100]}>
              <Img
                src={require("../../../../../assets/Images/Projects/Project-1.jpg")}
              />
              <Div marginBottom="10">
                <H3 inline>Boli //</H3>
                <Text marginLeft="5" inline size="22">
                  The Language
                </Text>
              </Div>
              <Text align={TextAlignVariants.justify} lineHeight="1.44">
                A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers.
              </Text>
            </Div>
          </Div>
          <Div flexSize={1} pointer>
            <Div color={white[100]}>
              <Img
                src={require("../../../../../assets/Images/Projects/Project-1.jpg")}
              />
              <Div marginBottom="10">
                <H3 inline>Boli //</H3>
                <Text marginLeft="5" inline size="22">
                  The Language
                </Text>
              </Div>
              <Text align={TextAlignVariants.justify} lineHeight="1.44">
                A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers.
              </Text>
            </Div>
          </Div>
        </Div>
        <Div flex justifyContent={JustifyContentVariants.center}>
          <TertiaryButton marginTop="16">See More</TertiaryButton>
        </Div>
      </Container>
    </Div>
  );
}

export default ProjectsComponent;
