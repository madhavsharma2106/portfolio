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
import {
  Container,
  orange,
  meduimBreakpointStyles,
} from "../../../../../utils";
import { BlogCard } from "../../../../organisms";

function BlogsComponent() {
  return (
    <Div
      paddingTop="80"
      paddingBottom="80"
      css={[meduimBreakpointStyles(`padding: 50px`)]}
    >
      <Container>
        <H1 color={orange[100]} size="48" underlined marginBottom="20">
          This is my sandbox. <br /> I create sandcastles here.
        </H1>
        <Div
          flex
          justifyContent={JustifyContentVariants.spaceBetween}
          modifiers="medium"
          css={[meduimBreakpointStyles(`flex-direction: column`)]}
        >
          <Div marginRight="20" flexSize={1} pointer>
            <BlogCard
              img={require("../../../../../assets/Images/Blogs/Blog-1.jpg")}
              summary="A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers."
              title="What Web developers get wrong about Alt text."
              readTime="3"
            />
          </Div>

          <Div marginRight="20" flexSize={1} pointer>
            <BlogCard
              img={require("../../../../../assets/Images/Blogs/Blog-1.jpg")}
              summary="A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers."
              title="What Web developers get wrong about Alt text."
              readTime="3"
            />
          </Div>
          <Div marginRight="20" flexSize={1} pointer>
            <BlogCard
              img={require("../../../../../assets/Images/Blogs/Blog-1.jpg")}
              summary="A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers."
              title="What Web developers get wrong about Alt text."
              readTime="3"
            />
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
