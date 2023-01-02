import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import Page from "../../Components/Partials/PageTemplate/Page";
import { useUsersStore } from "./useUsersStore";

const UserDetail = () => {
  const slug = useParams();

  const { getUser } = useUsersStore();

  const user = useMemo(() => getUser(slug.slug), [slug.slug, getUser]);

  console.log("bruger ", user);

  return <Page title={`Info om ${user.firstName + " - " + user.lastName}`}>{user.firstName}</Page>;
};

export default UserDetail;
