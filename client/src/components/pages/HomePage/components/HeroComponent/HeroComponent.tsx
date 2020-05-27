import React from "react";
import "./HeroComponent.scss";
import Text from "../../../../atoms/Text/Text";

function HeroComponent() {
  return (
    <div className="hero-component-wrapper">
      <div className="container">
        <div className="hero-text">
          <div className="left">
            <Text>I am Madhav</Text>
            <p>
              I’ve carved myself a little corner on the internet. Let me show
              you around.
            </p>
          </div>
          <div className="right">Hello</div>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
