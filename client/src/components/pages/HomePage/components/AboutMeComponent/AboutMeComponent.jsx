import React from "react";
import {
  Container,
  orange,
  black,
  meduimBreakpointStyles,
} from "../../../../../utils";
import {
  Div,
  JustifyContentVariants,
  AlignItemsVariants,
  FlexDirectionVariants,
  Text,
  FontWeightVariants,
  H3,
  H1,
} from "../../../../atoms";
import { Link, List } from "../../../../molecules/";

function AboutMeComponent() {
  return (
    <Container>
      <Div
        flex
        justifyContent={JustifyContentVariants.spaceBetween}
        alignItems={AlignItemsVariants.center}
        paddingTop={173}
        paddingBottom={173}
        modifiers="medium"
        css={meduimBreakpointStyles(
          `margin: auto 20px; flex-direction: column; padding: 30px auto;`
        )}
      >
        <Div flexSize="1">
          <H1
            underlined
            color={orange[100]}
            weight={FontWeightVariants.bold}
            marginBottom="48"
          >
            I love Web Technologies.
          </H1>
          <Text lineHeight="1.56" marginBottom="20">
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
        <Div
          flexSize="1"
          css={meduimBreakpointStyles(`margin-top: 50px; width: 100%;`)}
        >
          <Div
            width="75%"
            css={meduimBreakpointStyles(` width: 100%;`)}
            backgroundColor={black[300]}
            flex
            flexDirection={FlexDirectionVariants.column}
            alignItems={AlignItemsVariants.center}
            paddingTop="30"
            paddingBottom="30"
            margin="auto"
          >
            <H3 color={orange[100]} underlined marginBottom="20">
              Languages I speak
            </H3>
            <List
              items={[
                "HTML",
                "CSS",
                "React",
                "Angular",
                "Javascript / ES6+",
                "Node",
                "Mongo",
                "Kubernetes",
                "Docker",
              ]}
            />
          </Div>
        </Div>
      </Div>
    </Container>
  );
}

export default AboutMeComponent;
