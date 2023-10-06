import { LabedditContext } from "../../../global/LabedditContext";
import { useForm } from "../../../hooks/useForm"
import React, { useContext } from "react";
import {
  ButtonMessage, ContainerMessage, TextArea,
  WrapperMessage, Line
} from "./styled";

export default function TypeContentPosts() {

  const [form, onChange, resetForm] =
    useForm({ content: "" })
  const context = useContext(LabedditContext)

  const sendFormAction = async (e) => {
    e.preventDefault()
    const newAction = { content: form.content }
    await context.sendPost(newAction, "posts")
    resetForm()
  }

  return (
    <WrapperMessage onSubmit={sendFormAction}>
      <ContainerMessage>
        <TextArea
          id="content"
          name="content"
          value={form.content}
          onChange={onChange}
          placeholder="Escreva seu post"
          min="1"
          required
        />
      </ContainerMessage>

      <ButtonMessage>
        Postar
      </ButtonMessage>
      <Line></Line>
    </WrapperMessage>
  )
}