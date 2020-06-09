import React from "react";
import {
  Div,
  H1,
  H3,
  TertiaryButton,
  JustifyContentVariants,
  TextAlignVariants,
  Text,
  Img,
} from "../../../../atoms";
import { Container, orange } from "../../../../../utils";

function BlogsComponent() {
  return (
    <Div paddingTop="80" paddingBottom="80">
      <Container>
        <H1 color={orange[100]} size="48" underlined marginBottom="20">
          This is my sandbox. <br /> I create sandcastles here.
        </H1>
        <Div
          flex
          justifyContent={JustifyContentVariants.spaceBetween}
          modifiers="medium"
        >
          <Div marginRight="20" flexSize={1} pointer>
            <Div>
              <Img
                src={require("../../../../../assets/Images/Blogs/Blog-1.jpg")}
              />
              <H3 marginBottom="10">
                What Web developers get wrong about Alt text.
              </H3>
              <Text align={TextAlignVariants.justify} lineHeight="1.44">
                A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers.
              </Text>
            </Div>
          </Div>
          <Div marginRight="20" flexSize={1} pointer>
            <Div>
              <Img
                src={require("../../../../../assets/Images/Blogs/Blog-1.jpg")}
              />
              <H3 marginBottom="10">
                What Web developers get wrong about Alt text.
              </H3>
              <Text align={TextAlignVariants.justify} lineHeight="1.44">
                A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers.
              </Text>
            </Div>
          </Div>
          <Div flexSize={1} pointer>
            <Div>
              <Img
                src={require("../../../../../assets/Images/Blogs/Blog-1.jpg")}
              />
              <H3 marginBottom="10">
                What Web developers get wrong about Alt text.
              </H3>
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

export default BlogsComponent;
