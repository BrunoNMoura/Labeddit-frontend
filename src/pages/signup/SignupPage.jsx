import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { handlePosts } from "../../router/cordinator";
import { LabedditContext } from "../../global/LabedditContext";
import * as s from "./styled"
import Header from "../../components/header/Header";
import { ButtonToogleEye, ContainerEyePassword } from "../../styles/styles";
import { BASE_URL } from "../../constants/constants";

export default function SignupPage() {

  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const [eyePassword, setEyePassword] = useState()
  const [login, setLogin] = useState(false)

  const [form, onChange, resetForm] =
    useForm({
      name: "",
      email: "",
      password: "",
      repassword: "",
      newsLetter: ""
    })

  const sendFormSingUp = async (e) => {
    e.preventDefault()    
    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
      newsLetter: form.newsLetter
    }
    setLogin(true)
    await userSignup(newUser)
    if (context.getToken()) {
      handlePosts(navigate)
    } else {
      setLogin(false)
    }
  }
  return (
    <s.MainContainer onSubmit={sendFormSingUp}>
      <Header />
      <s.WrapperSingup>
        <s.SingupHeader>
          <s.Title>
            Olá, boas vindas
          </s.Title>
          <s.SubTitle>
            ao LabEddit;)
          </s.SubTitle>
        </s.SingupHeader>
        <s.ContainerInput>
          <s.Input
            type="text"
            placeholder="Apelido"
            name="name"
            value={form.name}
            onChange={onChange}
            title='informe seu nome (de 2 até 15 caracteres)'
            min="2"
            max="15"
            required />
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
            title='senha não corresponde'
            min="6"
            max='15'
            required />        
          <ContainerEyePassword>
            <ButtonToogleEye $eye={eyePassword} onClick={() =>
              setEyePassword(!eyePassword)}>
            </ButtonToogleEye>
          </ContainerEyePassword>

        </s.ContainerInput>

        <s.ContainerTerms>
          <s.AlertTerms>
            <s.TextTerms>Ao continuar, você concorda com o nosso <s.TextBlue>Contrato de usuário </s.TextBlue>
              e nossa <s.TextBlue>Política de Privacidade</s.TextBlue></s.TextTerms>
          </s.AlertTerms>

          <s.AcceptTerms>
            <input
              type="checkbox"
              id="newsLetter"
              name="newsLetter"
              value={form.newsLetter}
              onChange={onChange}
            />
            <s.TextTerms>Eu concordo em receber emails sobre coisas legais no Labeddit</s.TextTerms>
          </s.AcceptTerms>

        </s.ContainerTerms>
        <s.ContainerButtons>
          <s.Button>{!login ? 'Cadastrar': 'Por favor aguarde...'}</s.Button>
        </s.ContainerButtons>
      </s.WrapperSingup>
    </s.MainContainer>
  )

  async function userSignup(input) {
    const PATH = BASE_URL + "/users/signup"
    await axios.post(PATH, input)
      .then(response => {
        context.setToken(response.data.token)
        context.setUserLoged(response.data.user)
      })
      .catch(error => {
        if (error.response) {
          const msgError = error.response.data.message
          context.modal("Dados inválidos", msgError, "error")
        } else {
          context.modal("Sistema indisponível", "tente novamente mais tarde", "error")
        }
      })
  }
}