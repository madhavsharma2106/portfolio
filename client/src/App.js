import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  TertialryButton,
} from "../src/components/atoms/Button/Button";
import { Text, ColorVariant } from "./components/atoms/Text/Text";

function App() {
  return (
    <div className="App">
      <PrimaryButton>Hello</PrimaryButton>
      <SecondaryButton modifiers="tealText">Hello</SecondaryButton>
      <SecondaryButton>Hello</SecondaryButton>
      <TertialryButton>Hello</TertialryButton>
      <Text color={ColorVariant.tealGreen} weight={700}>
        lorem ipsum dolor sit amet
      </Text>
      <Text secondary weight={700}>
        lorem ipsum dolor sit amet
      </Text>
    </div>
  );
}

export default App;
