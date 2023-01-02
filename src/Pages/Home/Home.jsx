import React, { useState } from "react";
import { StyledButton } from "../../Components/Buttons/StyledButton";
import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";
import Inputs from "../../Components/Inputs/Inputs";
import { useModalStore } from "../../Components/Modal/useModalStore";
import Page from "../../Components/Partials/PageTemplate/Page";
import { Heading } from "../../Styles/Heading.Styled";
import Users from "../Users/Users";

export const Home = () => {
  const { setModalPayload } = useModalStore();
  const { setFlashMessage } = useFlashMessageStore();

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

      <StyledButton size="small" variant="secondary" onClick={() => setModalPayload(name)}>
        vis mig brugere
      </StyledButton>
      <StyledButton variant="ctaPrimary" onClick={() => setFlashMessage(name)}>
        Flash me
      </StyledButton>
    </Page>
  );
};
