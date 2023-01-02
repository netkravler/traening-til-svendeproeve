export default function authHeader() {
  const currentUser = localStorage.getItem("dummyjson") ? JSON.parse(localStorage.getItem("teatercustomer")) : "";

  if (currentUser && currentUser.token) {
    return {
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${currentUser.token}`,
    };
  } else {
    return {};
  }
}
