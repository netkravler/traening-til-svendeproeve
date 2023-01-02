import React from "react";

import { StyledLinks } from "../../../Styles/StyledLink";

import { MainWrapper } from "../../../Styles/ContainerWrapper.Styled";
import { StyledFooter, StyledFooterSection } from "./StyledFooter";
import { StyledFooterNav } from "./StyledFooterNav";

import { SocialIconArr } from "../../SocialMedia/SocialIconArr";

import { StyledSocialIcons } from "../../SocialMedia/SocialIcons.Styled";
import { Heading } from "../../../Styles/Heading.Styled";
import { ContentWrapper } from "../../../Styles/ContentWrapper";

export const Footer = () => {
  return (
    <StyledFooterSection>
      <MainWrapper>
        <ContentWrapper>
          <StyledFooter>
            <StyledFooterNav>
              <ul>
                <li>
                  <Heading as="h5" color="white">
                    Adresse
                  </Heading>
                </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              </ul>
            </StyledFooterNav>
            <StyledFooterNav>
              <ul>
                <li>
                  <Heading as="h5" color="white">
                    Info
                  </Heading>
                </li>
<li></li>
<li></li>
<li></li>
<li></li>
              </ul>
            </StyledFooterNav>
            <StyledFooterNav>
              <ul>
                <li>
                  <Heading as="h5" color="white">
                    Praktisk info
                  </Heading>
                </li>
                <li>
                  <StyledLinks color="white">Kontakt</StyledLinks>
                </li>

              </ul>
            </StyledFooterNav>
            <StyledFooterNav>
              <StyledSocialIcons>
                {SocialIconArr.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" title={item.title}>
                      {item.icon}
                    </a>
                  </li>
                ))}
              </StyledSocialIcons>
            </StyledFooterNav>
          </StyledFooter>
        </ContentWrapper>
      </MainWrapper>
    </StyledFooterSection>
  );
};
