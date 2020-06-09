import React from "react";

import {
  Div,
  JustifyContentVariants,
  AlignItemsVariants,
  Text,
  TextAlignVariants,
  FontWeightVariants,
  H1,
  PrimaryButton,
  Icon,
} from "../../../../atoms/";
import {
  tealGreen,
  white,
  Container,
  meduimBreakpointStyles,
  smallBreakpointStyles,
} from "../../../../../utils";

function HeroComponent() {
  return (
    <Div
      backgroundColor={tealGreen[100]}
      paddingTop="120"
      css={meduimBreakpointStyles(`padding: 20px;`)}
    >
      <Container>
        <Div
          flex
          justifyContent={JustifyContentVariants.spaceBetween}
          alignItems={AlignItemsVariants.center}
          paddingTop="90"
          css={meduimBreakpointStyles(`
            flex-direction: column-reverse;
            align-items: start;
          `)}
        >
          <Div flexSize="1">
            <H1
              color={white[100]}
              size="48"
              lineHeight="0.94"
              marginBottom="30"
              css={[meduimBreakpointStyles(`margin-top: 50px`)]}
            >
              I am Madhav.
            </H1>
            <Text
              color="white"
              size="25"
              weight={FontWeightVariants.semibold}
              underlined
              lineHeight="1.32"
            >
              I’ve carved myself a little corner on the internet. Let me show
              you around.
            </Text>
          </Div>
          <H1
            flexSize="1"
            color="white"
            underlined
            size="164"
            lineHeight="0.93"
            align={TextAlignVariants.right}
            weight={FontWeightVariants.bold}
            css={smallBreakpointStyles(`font-size: 100px`)}
          >
            HELLO.
          </H1>
        </Div>
        <Div
          flex
          justifyContent={JustifyContentVariants.spaceBetween}
          alignItems={AlignItemsVariants.center}
          marginTop={200}
          paddingBottom={100}
          css={smallBreakpointStyles(
            `flex-direction: column; margin-top: 100px`
          )}
        >
          <Div>
            <Icon marginRight="16" />
            <Icon marginRight="16" />
            <Icon marginRight="16" />
          </Div>
          <Div
            css={smallBreakpointStyles(`
            button{
              width: 100%;
              margin: 8px auto;
            }
          `)}
          >
            <PrimaryButton margin="16px">Download Resume</PrimaryButton>
            <PrimaryButton>Contact Me</PrimaryButton>
          </Div>
        </Div>
      </Container>
    </Div>
  );
}

export default HeroComponent;
