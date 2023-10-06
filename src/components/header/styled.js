import { styled } from "styled-components";

export const WrapperHeader = styled.header`
  max-width: 1200px;
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: #EDEDED;
  div {   
    width: 33.33%;  }  
`;

export const ContainerUser = styled.div`
  padding-left: 15px;
  font-family: IBM Plex Sans;
  font-size: 12px;
  font-weight: 600;
  line-height: 47px;
  letter-spacing: 0em;
  color: #1F1F1F;
`;

export const HeaderLogo = styled.div`
  width: 33.33%;
  /* padding: 5%; */
  display: flex;
  justify-content: center;
`;

export const ContainerButton = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: right;
  padding-right: 20px;
`;

export const Button = styled.button`
  width: 67px;
  height: 35px;
  border: none;
  background-color: transparent;
  padding: 5px;
  color: #4088CB;
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0em;
  &:hover{
    color: #5099CB;
    cursor: pointer;
  }
`;
export const ButtonClose = styled.button`
  display: block;
  width: 25px;
  height: 24px;
  background-image:  url("/image/close.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  &:hover{
    cursor: pointer;
  }
`