import { MainPagesArr } from "../../../App/Routers/MainPagesArr";
import useFlashMessageStore from "../../FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../../Login/useLoginStore";


import { MainWrapper } from "../../../Styles/ContainerWrapper.Styled";

import { Hamburger, Logo, MainHeader, MainNav, Menu, MenuLink } from "./StyledBurgerMenu";

import { useIsOpenNav } from "./useIsOpenNav";
import { ContentWrapper } from "../../../Styles/ContentWrapper";

const Header = () => {
  const { isOpen, setIsOpen } = useIsOpenNav();
  const { loggedIn, setLogOut } = useLoginStore();
  const { setFlashMessage } = useFlashMessageStore();

  const logUd = () => {
    setFlashMessage("På gensyn");
    setLogOut();
  };

  return (
    <>
      <MainHeader>
        <MainWrapper>
          <ContentWrapper>
            <MainNav>
              <Logo to="/">
                Logo
              </Logo>
              <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
              </Hamburger>
              <Menu isOpen={isOpen}>
                {MainPagesArr.filter((li) => li.title !== "").map((item, i) => (
                  <li key={i}>
                    <MenuLink end to={item.path.replace("/*", "")}>{item.title}</MenuLink>
                  </li>
                ))}

                {!loggedIn ? (
                  <li>
                    <MenuLink end to="/login">Login</MenuLink>
                  </li>
                ) : (
                  <li>
                    <MenuLink end onClick={() => logUd()}>Logud</MenuLink>
                  </li>
                )}
              </Menu>
            </MainNav>
          </ContentWrapper>
        </MainWrapper>
      </MainHeader>
    </>
  );
};
export default Header;
