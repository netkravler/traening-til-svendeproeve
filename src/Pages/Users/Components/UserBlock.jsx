import React from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../../../Styles/Heading.Styled";
import { StyledButton } from "../../../Styles/StyledComponents/StyledButton";

import { StyledUserBlock } from "./StyledUser";

const UserBlock = ({ userData }) => {
  const navigate = useNavigate();

  console.log(userData);

  return (
    <StyledUserBlock gender={userData.gender} onClick={() => navigate(`/users/${userData.slug}`)}>
      <img src={userData.image} alt={userData.firstName} />
      <StyledButton variant={userData.gender === "male" ? "primary" : "secondary"}>howdy</StyledButton>
      <Heading as="h2">{userData.firstName}</Heading>
    </StyledUserBlock>
  );
};

export default UserBlock;
