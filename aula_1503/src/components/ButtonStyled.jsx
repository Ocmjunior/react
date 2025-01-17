import styled from "styled-components";

export const Botao = styled.button`
background-color: #000;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  width: auto;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  &:hover {
    background-color: pink;
    box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  }
`;