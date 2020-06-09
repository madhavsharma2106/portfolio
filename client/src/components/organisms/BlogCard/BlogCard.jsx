import React from "react";
import { Div, Img, H3, Text, TextAlignVariants } from "../../atoms";
import { black } from "../../../utils";

function BlogCard(props) {
  const { img, title, readTime, summary } = props;
  return (
    <Div {...props}>
      <Img width="100%" src={img} />
      <H3 marginBottom="10">{title}</H3>
      <Text align={TextAlignVariants.justify} lineHeight="1.44">
        {summary}
      </Text>
      <Text
        align={TextAlignVariants.right}
        size="13"
        lineHeight="3.46"
        color={black[200]}
      >
        {readTime} minute read
      </Text>
    </Div>
  );
}

export default BlogCard;
