import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

interface PageProps {
  title: string;
  description: string;
  children: React.ReactElement | React.ReactElement[];
}

const helmetContext = {};

function Page({ children, title, description }: PageProps) {
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
