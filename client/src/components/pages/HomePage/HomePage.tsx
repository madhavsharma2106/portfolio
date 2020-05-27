import React from "react";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <>
      <Helmet>
        <title> Madhav Sharma :: Home Page</title>
        <meta
          name="description"
          content="I’ve carved myself a little corner on the internet. I post interesting projects and articles here. Let me show you around."
        />
      </Helmet>
      <div>Home Page</div>
    </>
  );
}

export default HomePage;
