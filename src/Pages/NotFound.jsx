import React from "react";
import Page from "../Components/Partials/PageTemplate/Page";

import { Heading } from "../Styles/Heading.Styled";



const NotFound = () => {


  const path = window.location.href;
  const url = path.substring(path.lastIndexOf("/") + 1);

  return (
    <Page title={`404 siden ${url} blev ikke fundet`}>

      <section>
        <header>
          <Heading>404 NotFound</Heading>
        </header>
        <main>
          <Heading as="h2">
            <p>
              Siden
              <span>
                <strong> "{url}" </strong>
              </span>
              blev ikke fundet på denne server.
            </p>
          </Heading>
        </main>
      </section>
    </Page>
  );
};

export default NotFound;
