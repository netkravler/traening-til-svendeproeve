import React from "react";

import styled from "styled-components";
import { usePaginationStore } from "../../Components/Pagination/usePaginationStore";
import { Heading } from "../../Styles/Heading.Styled";
import UserBlock from "./Components/UserBlock";

const UsersList = () => {
  const { paginationState } = usePaginationStore();

  console.log(paginationState);

  return (
    <section>
      <header>
        <Heading>UsersList</Heading>
      </header>
      <article>
        <StyledUsersList>
          {paginationState?.map((user) => (
            <li key={user.id}>
              <UserBlock userData={user} />
            </li>
          ))}
        </StyledUsersList>
      </article>
    </section>
  );
};

export default UsersList;

const StyledUsersList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;
