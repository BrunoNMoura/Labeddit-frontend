import { styled } from "styled-components"

const ToggleButton = styled.button`
  padding: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  img{
    filter: invert(94%) sepia(11%) saturate(80%) hue-rotate(194deg) brightness(70%) contrast(88%);
  }
  &:hover{
    ${Test}{
      display: block;
    }
  }
`;