import axios from "axios";
import { createContext, useState } from "react";
import { BASE_URL } from "../constants/constants";
import { handleHome } from "../router/cordinator";
import Swal from "sweetalert2";

export const LabedditContext = createContext()

export default function LabedditProvider({ children }) {

  const [userLoged, setUserLoged] = useState()
  const [postSelect, setPostSelect] = useState()
  const [reload, setReload] = useState(false)

  const sendPost = async (input, action) => {
    const token = getToken();
    const body = {
      content: input.content,
    };

    let PATH = ""
    if (action == "comments") {
      PATH = BASE_URL + "/comments/" + input.postId
    } else {
      PATH = BASE_URL + "/posts"
    }

    try {
      const result = await axios.post(PATH, body, {
        headers: {
          Authorization: token,
        },
      });
      setReload(!reload)
      return result
    } catch (error) {
      if (error.response) {
        modal(error.response.data.message, "", "error")
      } else if (error.request) {
        modal("Não Responde", "Verifique a sua conexão!", "error")
      } else {
        modal("Erro na requisição", error.message, "error")
      }
    }
  };

  const deletePostComment = async (input) => {
    const postId = input.postId
    const PATH = BASE_URL + "/" + input.action + "/" + postId
    const token = getToken()
    try {
      const result = await axios.delete(PATH, {
        headers: {
          Authorization: token,
        },
      });
      setReload(!reload)
      return result
    } catch (error) {
      if (error.response) {
        modal("Servidor Off", `Status: ${error.response.status}`, "error")
      } else if (error.request) {
        modal("Não Responde", "Verifique a sua conexão!", "error")
      } else {
        modal("Erro na requisição", error.message, "error")
      }
    }
  }

  const editPostComment = async (input) => {
    const postId = input.postId
    const body = { content: input.content }
    const PATH = BASE_URL + "/" + input.action + "/" + postId
    const token = getToken()
    try {
      const result = await axios.put(PATH, body, {
        headers: {
          Authorization: token,
        },
      });
      setReload(!reload)
      return result
    } catch (error) {
      if (error.response) {
        modal("Servidor Off", `Status: ${error.response.status}`, "error")
      } else if (error.request) {
        modal("Não Responde", "Verifique a sua conexão!", "error")
      } else {
        modal("Erro na requisição", error.message, "error")
      }
    }
  }

  const sendLike = async (postId, action, like) => {
    const body = { action, like };
    const PATH = BASE_URL + "/likes/" + postId;
    const token = getToken();
    let response = false
    try {
      await axios.put(PATH, body, {
        headers: {
          Authorization: token,
        },
      });
      response = true
    } catch (error) {
      if (error.response) {
        modal("Erro", `Status: ${error.response.data.message}`, "error");
      } else if (error.request) {
        modal("Servidor não Responde", "Check sua conexão", "error");
      } else {
        modal("Solicitação inválida", error.message, "error");
      }
    }
    return response
  };

  const checkLogin = async () => {
    const PATH = BASE_URL + "/users/checkLogin"
    const token = getToken()
    let result = false
    await axios.post(PATH, null, {
      headers: {
        Authorization: token,
      },
    })
      .then(response => {
        setUserLoged(response.data)
        result = true
      })
    return result
  }

  const logout = (navigate) => {
    resetToken()
    handleHome(navigate)
    setUserLoged(null)
  }

  const setToken = (token) => {
    localStorage.setItem("token", token)
  }
  function getToken() {
    return localStorage.getItem("token")
  }
  const resetToken = () => {
    localStorage.removeItem("token")
  }

  function modal(title, text, icon) {
    Swal.fire({ title, text, icon })
  }
  const context = {
    logout,
    userLoged,
    setToken,
    setUserLoged,
    getToken,
    resetToken,
    sendLike,
    sendPost,
    postSelect,
    setPostSelect,
    editPostComment,
    deletePostComment,
    modal,
    checkLogin,
    reload,
    setReload
  }

  return (
    <LabedditContext.Provider value={context}>
      {children}
    </LabedditContext.Provider>
  )

}