import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  TertialryButton,
} from "../src/components/atoms/Button/Button";

function App() {
  return (
    <div className="App">
      <PrimaryButton>Hello</PrimaryButton>
      <SecondaryButton modifiers="tealText">Hello</SecondaryButton>
      <SecondaryButton>Hello</SecondaryButton>
      <TertialryButton>Hello</TertialryButton>
    </div>
  );
}

export default App;
