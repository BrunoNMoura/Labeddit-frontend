import Header from "../../components/header/Header";
import CardComments from "../../components/cards/card-message/CardComments";
import { WrapperComments } from "./styled";
import React, { useContext, useEffect, useState } from "react";
import { LabedditContext } from "../../global/LabedditContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import TypeContentComments from "../../components/cards/type-content/typeContentComments";
import CardPosts from "../../components/cards/card-message/CardPost";

export default function Comments() {

  const context = useContext(LabedditContext)
  const navigate = useNavigate()
  const { postSelect, setPostSelect } = context
  const [comments, setComments] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const [editing, setEditing] = useState(null)

  useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    const token = context.getToken()
    setIsLoading(true)
    try {
      const res =
        await axios
          .get(BASE_URL + "/comments/" + context.postSelect[0].id, {
            headers: {
              Authorization: token
            }
          })
      setComments(res.data);
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <>
      <Header />
      <WrapperComments>
        {
          CardPosts(postSelect[0], context, postSelect, setPostSelect, navigate, editing, setEditing)
        }
        <TypeContentComments />
        {
          isLoading
            ?
            <img src="/image/loading.gif"></img>
            :
            comments?.map((comment) => CardComments(comment, context, comments, setComments, editing, setEditing, postSelect[0]))
        }
      </WrapperComments>
    </>
  )
}