import React from "react";
import NewsLetterComponent from "./NewsLetterComponent/NewsLetterComponent";
import { Container, black, orange, white } from "../../../utils";
import { Div, Text, TextAlignVariants, H1, Icon } from "../../atoms";

function Footer() {
  return (
    <>
      <NewsLetterComponent />
      <Div backgroundColor={black[100]}>
        <Container paddingTop={133} paddingBottom={133}>
          <Div flex modifiers={["medium", "columnReverse"]}>
            <Div flexSize={3}>
              <H1 color={white[100]} size="30" lineHeight="1.5" underlined>
                I am always interested in cool stuff. <br /> Do you have a
                project in mind? Let’s talk.
              </H1>
              <Div flex marginTop="70">
                <Div flexSize={1}>
                  <Text color={orange[100]}>Phone</Text>
                  <Text color={white[100]} marginTop="20">
                    (+91) 7022629939
                  </Text>
                </Div>
                <Div flexSize={1}>
                  <Text color={orange[100]}>Email</Text>
                  <Text color={white[100]} marginTop="20">
                    madhavsharma2106@gmail.com
                  </Text>
                </Div>
                <Div flexSize={1}>
                  <Text color={orange[100]} marginBottom="19">
                    Social Media
                  </Text>
                  <Icon />
                  <Icon />
                  <Icon />
                </Div>
              </Div>
            </Div>
            <Div flexSize={1}>
              <Text
                color={orange[100]}
                underlined
                align={TextAlignVariants.right}
                pointer
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Back to top
              </Text>
            </Div>
          </Div>
        </Container>
      </Div>
    </>
  );
}

export default Footer;
