import React from "react";
import { Li, Ul, Ol } from "./ListStyles";
import { TextTransformVariants } from "../../atoms/";

export const ListVariant = {
  ordered: "ordered",
  unOrdered: "unordered",
};

function List({ items, variant = ListVariant.unOrdered }) {
  const renderListItems = () =>
    items
      ? items.map((item, i) => (
          <Li key={i} textTransform={TextTransformVariants.uppercase}>
            {item}
          </Li>
        ))
      : "List is empty";

  if (variant === ListVariant.ordered) {
    return <Ol>{renderListItems()}</Ol>;
  }
  return <Ul>{renderListItems()}</Ul>;
}

export default List;
