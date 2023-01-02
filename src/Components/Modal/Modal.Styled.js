import styled from "styled-components";

export const ModalStyled = styled.div`
  display: ${(props) => props.showmodal}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */

  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */

  main {
    position: relative;
    background-color:${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onBackground};
    top: 50%;
    transform: translateY(-50%);
    padding: 40px;
    border: 3px solid #888;
    width: 80%;
    margin: auto;
  }

  .close {
    border-radius: 50%;
    position: absolute;
    text-align: center;
    right: 10px;
    top: 10px;
    padding: 3px;
    width: 30px;
    aspect-ratio: 1/1;
    color: #aaa;
    background-color: #fff;

    font-size: 20px;
    font-weight: bold;

    &:hover,
    &:focus {
      background-color: #ccc;
      color: #fff;
      cursor: pointer;
    }
  }
`;
