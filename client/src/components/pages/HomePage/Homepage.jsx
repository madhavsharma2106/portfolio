import React from "react";
import Page from "../../molecules/Page";
import HeroComponent from "./components/HeroComponent";
function HomePage() {
  return (
    <Page
      description="I’ve carved myself a little corner on the internet. I post interesting projects and articles here. Let me show you around."
      title="Home"
    >
      <HeroComponent />
    </Page>
  );
}

export default HomePage;
