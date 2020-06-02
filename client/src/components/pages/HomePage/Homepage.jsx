import React from "react";
import { Page } from "../../molecules";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import AboutMeComponent from "./components/AboutMeComponent/AboutMeComponent";
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent";
import BlogsContainer from "./components/BlogsContainer/BlogsContainer";
function HomePage() {
  return (
    <Page
      description="I’ve carved myself a little corner on the internet. I post interesting projects and articles here. Let me show you around."
      title="Home"
    >
      <HeroComponent />
      <AboutMeComponent />
      <ProjectsComponent />
      <BlogsContainer />
    </Page>
  );
}

export default HomePage;
