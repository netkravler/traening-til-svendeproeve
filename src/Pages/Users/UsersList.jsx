import React from "react";
import { Link } from "react-router-dom";
import { usePaginationStore } from "../../Components/Pagination/usePaginationStore";
import { Heading } from "../../Styles/Heading.Styled";

const UsersList = () => {
  const { paginationState } = usePaginationStore();

  console.log(paginationState);
  return (
    <section>
      <header>
        <Heading>UsersList</Heading>
      </header>
      <article>
        <ul>
          {paginationState.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.slug}`}>{user.firstName}</Link>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default UsersList;
