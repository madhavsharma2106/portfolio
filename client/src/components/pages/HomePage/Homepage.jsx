import React from "react";
import { Page } from "../../molecules";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import AboutMeComponent from "./components/AboutMeComponent/AboutMeComponent";
import ProjectsComponent from "./components/ProjectsComponent/ProjectsComponent";
import BlogsComponent from "./components/BlogsComponent/BlogsComponent";
import { Footer, Menu } from "../../organisms";
import { tealGreen } from "../../../utils";
function HomePage() {
  return (
    <Page
      description="I’ve carved myself a little corner on the internet. I post interesting projects and articles here. Let me show you around."
      title="Home"
    >
      <Menu backgroundColor={tealGreen[100]} />
      <HeroComponent />
      <AboutMeComponent />
      <ProjectsComponent />
      <BlogsComponent />
      <Footer />
    </Page>
  );
}

export default HomePage;
