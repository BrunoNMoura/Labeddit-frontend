import { useContext, useState } from "react";
import { LabedditContext } from "../../global/LabedditContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import * as s from "./styled"
import { handlePosts, handleSingUp } from "../../router/cordinator";
import { ButtonToogleEye, ContainerEyePassword } from "../../styles/styles";
import { BASE_URL } from "../../constants/constants";
import axios from "axios";


export default function Login() {

  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const [eyePassword, setEyePassword] = useState()
  const [form, onChange, resetForm] = useForm({ email: "", password: "" })
  const [login, setLogin] = useState(false)

  const sendFormLogin = async (e) => {
    e.preventDefault()
    setLogin(true)
    await userLogin(form)
    const response = context.getToken()
    if (response) {
      resetForm()
      handlePosts(navigate)
    } else {
      setLogin(false)
    }
  }
  return (

    !context.userLoged && (
      <s.WrapperLogin onSubmit={sendFormLogin}>

        <s.LoginHeader>
          <img src="/image/logoBig.svg" alt="" />
          <s.Title>LabEddit</s.Title>
          <p>O projeto de rede social da Labenu</p>
        </s.LoginHeader>

        <s.ContainerInput>
          <s.Input
            type="email"
            placeholder="E-mail"
            name="email"
            value={form.email}
            onChange={onChange}
            title='insira um email válido!'
            required />
          <s.Input
            type={eyePassword ? "text" : "password"}
            placeholder="Senha"
            name="password"
            value={form.password}
            onChange={onChange}
            minLength="6"
            required />

          <ContainerEyePassword>
            <ButtonToogleEye $eye={eyePassword} onClick={() =>
              setEyePassword(!eyePassword)}>
            </ButtonToogleEye>
          </ContainerEyePassword>

        </s.ContainerInput>

        <s.ContainerButtons>
          <s.Button>{!login ? 'Continuar' : 'Por favor aguarde...'}</s.Button>
          <s.Line></s.Line>
          <s.Button onClick={() => handleSingUp(navigate)}>Crie uma conta!</s.Button>
        </s.ContainerButtons>

      </s.WrapperLogin>)
  )
  async function userLogin(input) {
    const PATH = BASE_URL + "/users/login"
    await axios.post(PATH, input)
      .then(response => {
        context.setToken(response.data.token)
        context.setUserLoged(response.data.user)
      })
      .catch(error => {
        console.log(error)
        if (error.response) {
          context.modal("Email ou senha inválida", "", "error")
        } else {
          context.modal("Sistema indisponível", "tente novamente mais tarde", "error")
        }
      })
  }

}