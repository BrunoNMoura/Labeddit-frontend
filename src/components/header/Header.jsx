import { LabedditContext } from "../../global/LabedditContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react"
import {
  Button, ButtonClose, ContainerButton,
  ContainerUser,
  HeaderLogo, WrapperHeader
} from "./styled"

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
        <img src="image/logoSmall.svg" alt="logo header" />
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