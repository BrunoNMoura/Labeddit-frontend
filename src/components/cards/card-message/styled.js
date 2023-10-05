import { styled } from "styled-components";

export const ContainerMessage = styled.div`
  width: 100%;
  min-height: fit-content;
  background: #f8f1f1;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 15px;
  border: 1.2px dotted #c4c0c0;
`;

export const TextUserCreator = styled.p`
font-family: IBM Plex Sans;
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
color: #6F6F6F;
`;

export const MessageContent = styled.div`
  width: 100%;
  min-height: fit-content;
  padding: 10px;  
  margin: 20px 0px;
`;

export const MessageStatus = styled.div`
  display: flex;
  width: fit-content;
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: fit-content;
  padding: 10px;
 `;

export const ContainerButtonLiked = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: fit-content;
  gap: 8px;
  padding-left: 15px;
  padding-right: 15px;
  height: 28px;
  border-radius: 28px;
  border: 1px solid rgba(0,0,0,0.12);
`;

export const ContainerButtonComment = styled(ContainerButtonLiked)`
  width: fit-content;
  padding-left: 20px;
  padding-right: 20px;
  gap: 3px;
  border-radius: 28px;   
  ${({ $noborder }) => $noborder == "yes" &&
    `
    border-color: transparent;
    `} 
`;

export const ContainerButtonEdit = styled(ContainerButtonLiked)`
  width: fit-content;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 28px;   
  gap: 30px;
`;

export const ButtonLike = styled.button`
  width: 21.72px;
  height: 21.72px;
  border: none;
  background-color: transparent;
  background-image: url(/image/like.svg);
  background-repeat: no-repeat;
  background-position: center;
  padding: 5px 5px;

  &:hover{
    cursor: pointer;
  }
  ${({ $applyfilter }) => $applyfilter &&
    `
      filter: invert(56%) sepia(75%) saturate(2848%) hue-rotate(358deg) brightness(99%) contrast(89%);
    `} 
`;

export const ButtonDislike = styled(ButtonLike)`
  background-image: url(/image/dislike.svg);
  ${({ $applyfilter }) => $applyfilter &&
    `
      filter: invert(56%) sepia(75%) saturate(2848%) hue-rotate(358deg) brightness(99%) contrast(89%);
    `}  
`;

export const ButtonComment = styled.button`
  width: 20.72px;
  height: 20.72px;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-image: url(/image/comments.svg);
  padding: 5px 5px;
  &:hover{
    cursor: pointer;
  }  

`;

export const ButtonEditPostComment = styled.button`
  width: 17.72px;
  height: 17.72px;
  border: none;
  background-color: transparent;
  background-image: url(/image/edit.svg);
  background-repeat: no-repeat;
  background-position: center;
  filter: invert(94%) sepia(11%) saturate(80%) hue-rotate(194deg) brightness(70%) contrast(88%);
  &:hover{
    cursor: pointer;
  }  
`;

export const ButtonDeletePostComment = styled(ButtonEditPostComment)`
  background-image: url(/image/delete.svg);
`;

export const ButtonConfirm = styled(ButtonEditPostComment)`
  background-image: url(/image/confirm.svg);
`;

export const ButtonCancel = styled(ButtonEditPostComment)`
  background-image: url(/image/cancel.svg);
`;

export const Score = styled.p`
  font-family: IBM Plex Sans;
  font-size: 10.5px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center; 
  color: #6F6F6F;
  margin: 0px 3px; 
  &:hover{
    cursor: pointer;
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;
  background-color: #EDEDED;
  padding: 10px 10px; 
  border-radius: 12px;
`;