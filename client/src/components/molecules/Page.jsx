import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const helmetContext = {};

function Page({ children, title, description }) {
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Madhav Sharma :: {title}</title>
          <meta name="description" content={description} />
        </Helmet>
        {children}
      </HelmetProvider>
    </>
  );
}

export default Page;
