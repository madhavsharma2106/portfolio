import React from "react";
import { Container, orange } from "../../../../../utils";
import {
  Div,
  JustifyContentVariants,
  AlignItemsVariants,
} from "../../../../atoms/Div/Div";
import { Text, FontWeightVariants } from "../../../../atoms/Text/Text";
import Link from "../../../../molecules/Link/Link";

function AboutMeComponent() {
  return (
    <Container>
      <Div
        flex
        justifyContent={JustifyContentVariants.spaceBetween}
        alignItems={AlignItemsVariants.center}
        paddingTop={173}
      >
        <Div>
          <Text
            underlined
            size="45"
            color={orange[100]}
            weight={FontWeightVariants.bold}
          >
            I love Web Technologies.
          </Text>
          <Text lineHeight="1.56">
            Back in 2013, I helped my father build a website for a project he
            had in mind. It took me 3 sleepless nights to set up a site which
            would fail when seen in a different resolution (Who knew about media
            queries back then?). It has been 6 years since then and I’ve been
            hooked to the front end world. Still spending sleepless nights and
            still failing at new things.
          </Text>
          <Text lineHeight="1.56">
            Work-wise, I work at a great company called
            <Link to="https://www.arm.com">Arm</Link> building complex web
            products for our customers. The React-based portal helps customers
            manage millions of devices across the globe. I spend my day writing
            features, unit-tests, a little bit of DevOps and giggling at a lot
            of Memes. I also know Kung-fu, Karate, Taekwondo and many other
            words.
          </Text>
        </Div>
        <Div>sdfsdf</Div>
      </Div>
    </Container>
  );
}

export default AboutMeComponent;
