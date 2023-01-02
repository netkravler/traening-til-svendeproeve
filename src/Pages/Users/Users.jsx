import React, { useCallback, useEffect } from "react";

import slugify from "slugify";

import Pagination from "../../Components/Pagination/Pagination";
import Page from "../../Components/Partials/PageTemplate/Page";
import { useGetListByEndpointData } from "../../Hooks/useGetItemByEndpointDataId";
import UsersList from "./UsersList";
import { useUsersStore } from "./useUsersStore";

const Users = () => {
  const { users, setUsers } = useUsersStore();

  // get state from hook using endpoint and key you wish to get
  const { state: userState } = useGetListByEndpointData("users?limit=100", "users");

  // add key to output, in this case a slug wich can be used for the page URL 
  const renderUsers = useCallback(() => {
    const sluggedDate = userState.map((user, i) => ({
      ...user,
      slug: slugify(user.firstName + "-" + user.lastName, { lower: true, strict: true }),
    }));
    setUsers(sluggedDate);
  }, [userState, setUsers]);

  // run the function if state changes
  useEffect(() => {
    renderUsers();
  }, [userState, renderUsers]);

  return (
    <Page title="brugere">
      <UsersList />
      <Pagination items={users} />
    </Page>
  );
};

export default Users;
