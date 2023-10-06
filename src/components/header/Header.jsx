import { LabedditContext } from "../../global/LabedditContext";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react"
import {
  Button, ButtonClose, ContainerButton,
  ContainerUser,
  HeaderLogo, WrapperHeader
} from "./styled"
import logo from "../../assets/logo-labeddit.png"

export default function Header() {
  const context = useContext(LabedditContext)
  const { logout, userLoged } = context
  const RETURN = -1
  const navigate = useNavigate()

  return (
    <WrapperHeader>
      <ContainerUser>
        {
          window.location.href.includes("comments") && 
            <ButtonClose onClick={()=>{ navigate(RETURN)}} />
        }
      </ContainerUser>
      <HeaderLogo>
        <img src={logo} alt="logo header" width="50" height="50"/>
      </HeaderLogo>

      <ContainerButton>
        {
          window.location.href.includes("singup") ?
            <Button onClick={() => navigate("/")}>Login</Button>
            :
            <Button onClick={() => logout(navigate)}>Logout</Button>
        }
      </ContainerButton>

    </WrapperHeader>
  )
}