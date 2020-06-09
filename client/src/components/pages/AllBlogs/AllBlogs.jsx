import React from "react";
import { Page } from "../../molecules";

import { Footer, Menu, BlogCard } from "../../organisms";
import {
  tealGreen,
  orange,
  meduimBreakpointStyles,
  Container,
} from "../../../utils";
import { Text, H1, Div, JustifyContentVariants } from "../../atoms";

function AllBlogs() {
  return (
    <Page description="Blogs Page description" title="Blogs">
      <Menu backgroundColor={tealGreen[100]} />
      <Container>
        <H1
          size="48"
          color={orange[100]}
          underlined
          margin="40px auto"
          css={meduimBreakpointStyles(`padding: 20px;`)}
        >
          Blogs
        </H1>
        <Div
          flex
          flexWrap="wrap"
          justifyContent={JustifyContentVariants.spaceBetween}
        >
          <BlogCard
            marginTop="20"
            maxWidth="480"
            img={require("../../../assets/Images/Blogs/Blog-1.jpg")}
            summary="A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers."
            title="What Web developers get wrong about Alt text."
            readTime="3"
          />
          <BlogCard
            marginTop="20"
            maxWidth="480"
            img={require("../../../assets/Images/Blogs/Blog-1.jpg")}
            summary="A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers."
            title="What Web developers get wrong about Alt text."
            readTime="3"
          />
          <BlogCard
            marginTop="20"
            maxWidth="480"
            img={require("../../../assets/Images/Blogs/Blog-1.jpg")}
            summary="A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers."
            title="What Web developers get wrong about Alt text."
            readTime="3"
          />
          <BlogCard
            marginTop="20"
            maxWidth="480"
            img={require("../../../assets/Images/Blogs/Blog-1.jpg")}
            summary="A programming language that speaks Hindi. A fun project I built
                to understand the inner workings of compilers."
            title="What Web developers get wrong about Alt text."
            readTime="3"
          />
        </Div>
      </Container>
      <Footer />
    </Page>
  );
}

export default AllBlogs;
