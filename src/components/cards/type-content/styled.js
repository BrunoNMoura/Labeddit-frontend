import { styled } from "styled-components";
export const WrapperMessage = styled.form`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  margin-bottom: 18px;
`;

export const ContainerMessage = styled.div`
  width: 100%;
  height: 131px;
  background-color: #EDEDED;
  border-radius: 12px;
  margin: 20px 0 15px 0;
 
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #EDEDED;
  padding-inline: 20px;
  padding-top: 20px; 
  border-radius: 12px;
`;

export const Line  = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`;

export const ButtonMessage = styled.button`
  width: 100%;
  height: 47px;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  padding: 12px, 145px, 12px, 145px;
  border-radius: 12px;  
  border: none;
  font-family: IBM Plex Sans;
  font-size: 18px;
  font-weight: 700;
  line-height: 47px;
  letter-spacing: 0em;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 15px;

  &:hover{
    cursor: pointer;
  }
`;

