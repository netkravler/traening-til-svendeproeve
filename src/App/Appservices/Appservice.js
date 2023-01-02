import Axios from "axios";

import API_URL from "./API_URL";
import AuthHeader from "./auth-header";

const GetList = (e) => {
  return Axios.get(`${API_URL}/${e}`, {
    headers: AuthHeader(),
  });
};

const GetDetail = (e, id) => {
  return Axios.get(`${API_URL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const Create = (e, data) => {
  return Axios.post(`${API_URL}/${e}`, data, {
    headers: AuthHeader(),
  });
};

const Login = async (username, password) => {
  return await Axios.post(`https://api.mediehuset.net/token`, { username, password });
};

const Logout = async () => {
  return await Axios.post(`${API_URL}/logout`, {
    headers: AuthHeader(),
  });
};

const Update = async (e, id, data) => {
  return await Axios.put(`${API_URL}/${e}/${id}`, data, {
    headers: AuthHeader(),
  });
};

const Remove = (e, id) => {
  return Axios.delete(`${API_URL}/${e}/${id}`, {
    headers: AuthHeader(),
  });
};

const AppService = {
  GetList,
  GetDetail,
  Create,
  Update,
  Remove,
  Login,
  Logout,
};

export default AppService;
