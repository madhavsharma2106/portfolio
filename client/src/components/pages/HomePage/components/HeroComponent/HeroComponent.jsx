import React from "react";
import {
  Text,
  TextAlignVariants,
  FontWeightVariants,
} from "../../../../atoms/Text/Text";

import { PrimaryButton } from "../../../../atoms/Button/Button";
import {
  Div,
  JustifyContentVariants,
  AlignItemsVariants,
} from "../../../../atoms/Div/Div";
import { tealGreen, white, Container } from "../../../../../utils";
import Icon from "../../../../atoms/Icon/Icon";
function HeroComponent() {
  return (
    <Div backgroundColor={tealGreen[100]}>
      <Container>
        <Div
          flex
          justifyContent={JustifyContentVariants.spaceBetween}
          alignItems={AlignItemsVariants.center}
          paddingTop="90"
        >
          <Div width="350">
            <Text
              color={white[100]}
              size="48"
              weight={FontWeightVariants.bold}
              lineHeight="0.94"
            >
              I am Madhav.
            </Text>
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
          <Text
            color="white"
            underlined
            size="164"
            lineHeight="0.93"
            textAlign={TextAlignVariants.right}
            weight={FontWeightVariants.bold}
          >
            HELLO.
          </Text>
        </Div>
        <Div
          flex
          justifyContent={JustifyContentVariants.spaceBetween}
          alignItems={AlignItemsVariants.center}
          marginTop={30}
          paddingBottom={100}
        >
          <Div>
            <Icon />
            <Icon />
            <Icon />
          </Div>
          <Div>
            <PrimaryButton marginRight="16">Download Resume</PrimaryButton>
            <PrimaryButton>Contact Me</PrimaryButton>
          </Div>
        </Div>
      </Container>
    </Div>
  );
}

export default HeroComponent;
