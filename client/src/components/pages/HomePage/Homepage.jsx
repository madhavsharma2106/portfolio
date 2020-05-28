import React from "react";
import Page from "../../molecules/Page/Page";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import AboutMeComponent from "./components/AboutMeComponent/AboutMeComponent";
function HomePage() {
  return (
    <Page
      description="I’ve carved myself a little corner on the internet. I post interesting projects and articles here. Let me show you around."
      title="Home"
    >
      <HeroComponent />
      <AboutMeComponent />
    </Page>
  );
}

export default HomePage;
