import React, { useEffect } from "react";
import styled from "styled-components";

import { MainWrapper } from "../../../Styles/ContainerWrapper.Styled";
import { ContentWrapper } from "../../../Styles/ContentWrapper";
import { useIsOpenNav } from "../BurgerMenu/useIsOpenNav";

const Page = ({ title, description, children }) => {
  const { setIsOpen } = useIsOpenNav();
  useEffect(() => {
    document.title = `${title}`;
    window.scrollTo(0, 0);
    if (description) {
      document.querySelector('meta[name="description"]').setAttribute("content", description);
    }
    setIsOpen(false);
  }, [title, description, setIsOpen]);

  return (
    <StyledBodyWrapper>
      <MainWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </MainWrapper>
    </StyledBodyWrapper>
  );
};

export default Page;

export const StyledBodyWrapper = styled.main`
  margin-bottom: auto;
  padding: ${({ theme }) => theme.mainsettings.containerPadding} 0;
  //border: solid 2px green;
`;
