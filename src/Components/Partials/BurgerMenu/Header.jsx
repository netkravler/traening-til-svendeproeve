import { MainPagesArr } from "../../../App/Routers/MainPagesArr";




import { MainWrapper } from "../../../Styles/ContainerWrapper.Styled";

import { Hamburger, Logo, MainHeader, MainNav, Menu, MenuLink } from "./StyledBurgerMenu";

import { useIsOpenNav } from "./useIsOpenNav";
import { ContentWrapper } from "../../../Styles/ContentWrapper";

const Header = () => {
  const { isOpen, setIsOpen } = useIsOpenNav();





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


              </Menu>
            </MainNav>
          </ContentWrapper>
        </MainWrapper>
      </MainHeader>
    </>
  );
};
export default Header;
