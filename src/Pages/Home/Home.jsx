import React, { useState } from "react";


import Inputs from "../../Components/Inputs/Inputs";

import Page from "../../Components/Partials/PageTemplate/Page";
import { Heading } from "../../Styles/Heading.Styled";
import { StyledButton } from "../../Styles/StyledComponents/StyledButton";

export const Home = () => {


  const initialTeam = { id: "", name: "" };

  const [team, setTeam] = useState(initialTeam);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setTeam((prev) => ({ ...prev, [name]: value }));
  };

  const { name } = team;

  return (
    <Page title="forsiden" description="jeg er forsiden">
      <Heading as="h3">Home</Heading>
      <Inputs type="text" name="name" value={name} onChange={handleChange} />

      <StyledButton variant="primary" >
        Primary button
      </StyledButton>
      <StyledButton variant="ctaPrimary" >
        ctaPrimary
      </StyledButton>
    </Page>
  );
};
