import React from "react";
import {
  Div,
  H2,
  AlignItemsVariants,
  JustifyContentVariants,
} from "../../atoms";
import { Container, white } from "../../../utils";
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
          >
            <Link secondary to="/projects">
              Projects
            </Link>
            <Link secondary to="/projects">
              Projects
            </Link>
            <Link secondary to="/projects">
              Projects
            </Link>
          </Div>
        </Div>
      </Container>
    </Div>
  );
}

export default Menu;
