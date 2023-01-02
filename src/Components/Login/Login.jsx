import { useState } from "react";

import { useNavigate } from "react-router-dom";

import AppService from "../../App/Appservices/Appservice";

import useFlashMessageStore from "../FlashMessages/useFlashMessageStore";
import { useLoginStore } from "./useLoginStore";

import Inputs from "../Inputs/Inputs";
import { StyledButton } from "../Buttons/StyledButton";

import { Heading } from "../../Styles/Heading.Styled";
import { StyledHeader } from "../Headers/StyledHeaders";

const Login = () => {
  const navigate = useNavigate();

  const { setLoggedIn, loggedIn } = useLoginStore();

  const { setFlashMessage } = useFlashMessageStore();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const LogMeIn = async (e) => {
    e.preventDefault();

    const username = user.username;
    const password = user.password;

    try {
      const response = await AppService.Login(username, password);

      if (response.data) {
        response.data.gender = "ikke køn";
        const { access_token, username, user } = response.data;
        console.log(response.data);
        navigate("/");
        setFlashMessage("Velkommen " + username);
        setLoggedIn(true, user, username, access_token);
      }
    } catch (error) {
      setFlashMessage("Ingen brugere med disse kriterier");
    }
  };

  return (
    <>
      {!loggedIn && (
        <article>
          <StyledHeader variant="h2">Login</StyledHeader>
          <p>Her kan du logge ind</p>

          <form onSubmit={LogMeIn}>
            <Inputs
              type="text"
              required
              label="Brugernavn:"
              id="username"
              name="username"
              onChange={(e) => handleChange(e)}
              autoComplete="username"
            />

            <Inputs
              type="password"
              label="Adgangskode:"
              required
              id="password"
              name="password"
              onChange={(e) => handleChange(e)}
              autoComplete="password"
            />
            <StyledButton type="submit" variant="primary" size="medium" onClick={LogMeIn}>
              Login
            </StyledButton>
          </form>
        </article>
      )}
    </>
  );
};

export default Login;
