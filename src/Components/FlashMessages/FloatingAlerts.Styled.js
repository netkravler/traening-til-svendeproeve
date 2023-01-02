import styled from "styled-components";

export const Flashmessage = styled.span`
  div {
    display: block;
    position: fixed;
    z-index: 1200;
    top: 38px;
    left: 50%;
    transform: translateX(-50%);
    -moz-animation: floatingAlert ease-in ${(props) => props.flashDuration}ms forwards;
    -webkit-animation: floatingAlert ease-in ${(props) => props.flashDuration}ms forwards;
    -o-animation: floatingAlert ease-in ${(props) => props.flashDuration}ms forwards;
    animation: floatingAlert ease-in ${(props) => props.flashDuration}ms forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    background-color: ${({ theme }) => theme.colors.Secondary};
    color: ${({ theme }) => theme.colors.OnSecondary};
    padding: 10px 30px;
    border: solid 1px #333;
    border-radius: 5px;
    font-weight: 900;
    text-transform: uppercase;
  

  &:last-of-type {
    display: block;
  }
}

  @keyframes floatingAlert {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }

    9% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }

    91% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }

    100% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }
  }

  @-webkit-keyframes floatingAlert {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }

    9% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }

    91% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }

    100% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }
  }
`;
