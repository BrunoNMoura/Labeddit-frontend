import { styled } from "styled-components";

export const MainContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const WrapperSingup = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-around;

  min-height: 100vh;
  padding: 60px 32px;
`;

export const Title = styled.h1`
  font-family: IBM Plex Sans;
  font-size: 33px;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: left;
  color: #373737;
`;

export const SubTitle = styled.h1`
  font-family: IBM Plex Sans;
  font-size: 33px;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: 0em;
  color: #373737;
`;

export const SingupHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p{
    font-family: IBM Plex Sans;
    font-size: 16px;
    font-weight: 300;
    line-height: 21px;
    letter-spacing: 0em;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 4;
  row-gap: 5px;
`;

export const ContainerTerms = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
  align-content: center;
  border-radius: 4;
 `;

export const AlertTerms = styled.div`
`

export const AcceptTerms = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: Noto Sans;
    font-weight: 400;
  input {
    width: 23px;
    height: 23px;
  }
`;

export const TextTerms = styled.p`
  font-family: Noto Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

export const TextBlue = styled.span`
  color: #4088CB
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`;
export const Input = styled.input`
  display: block;
  width: 100%; 
  height: 60px;
  margin: 1px 0px;
  padding-inline: 5px;
  text-align: center;
  font-size: 18px;
  border-color: rgba(0,0,0,0.2);
  border-radius: 4px;
  transition: 0.3s ease;
  &:focus {
    border-width: 2.8px;
    border-color: #9747ff;   
  }
  &:hover {
    border-width: 4.5px;
    border-color: #9747ff;  
  }
  `;

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 51px;
  padding: 13px, 133px, 13px, 133px;
  border-radius: 27px;
  transition: 0.3s ease;
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border: none;
  color: #ffffff;
  transition: 0.3s ease;
  &:hover {
    background: linear-gradient(90deg, #F9B24E 0%,  #FF6489 100%);
    color: rgba(0,0,0,0.6);
  }
 `;




