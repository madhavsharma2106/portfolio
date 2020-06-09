import React from "react";
import {
  Div,
  H2,
  AlignItemsVariants,
  JustifyContentVariants,
  Text,
} from "../../atoms";
import {
  Container,
  white,
  meduimBreakpointStyles,
  orange,
} from "../../../utils";
import { Link } from "../../molecules";

function Menu({ backgroundColor }) {
  return (
    <Div backgroundColor={backgroundColor}>
      <Container>
        <Div
          flex
          height="100"
          alignItems={AlignItemsVariants.center}
          justifyContent={JustifyContentVariants.spaceBetween}
          css={meduimBreakpointStyles(`padding: 20px`)}
        >
          <Div flexSize="3">
            <H2
              color={white[100]}
              size="13"
              lineHeight="0.92"
              letterSpacing="0.52"
            >
              <Link secondary to="/">
                MADHAV SHARMA
              </Link>
            </H2>
          </Div>
          <Div
            flexSize="1"
            flex
            justifyContent={JustifyContentVariants.spaceBetween}
            css={meduimBreakpointStyles(`*{margin-left: 10px}`)}
          >
            <Link secondary to="/projects">
              Projects
            </Link>
            <Link secondary to="/blogs">
              Blogs
            </Link>
            <Text
              onClick={() => {
                window.scrollTo(0, 99999);
              }}
              color={white[100]}
              pointer
              css={`
                &:hover {
                  color: ${orange[100]};
                }
              `}
            >
              Contact
            </Text>
          </Div>
        </Div>
      </Container>
    </Div>
  );
}

export default Menu;
