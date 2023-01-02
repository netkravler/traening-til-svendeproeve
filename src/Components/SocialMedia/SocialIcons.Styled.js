import styled from "styled-components";

export const StyledSocialIcons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
 
  li {
  
    a {
      font-size: ${(props) => (props.fontsize === undefined ? "35px" : props.fontsize)};
      margin: .2rem;
      color: #fff;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
