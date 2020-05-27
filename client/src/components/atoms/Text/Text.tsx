import React from "react";

interface TextProps {
  children: React.ReactChild;
}

function Text(props: TextProps) {
  const { children } = props;
  return <p>{children}</p>;
}

export default Text;
