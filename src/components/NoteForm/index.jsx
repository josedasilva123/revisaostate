import React, { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NotesContext } from "../../contexts/NotesContext";
import { Button } from "../../styles/buttons";
import { Form, FormInput, FormTextarea } from "../../styles/form";

const NoteForm = () => {
  const { createNote } = useContext(NotesContext);
  const formSchema = yup.object().shape({
    title: yup
      .string()
      .required("O título é obrigatório!")
      .max(150, "O título não pode ser superior a 150 caracteres."),
    text: yup
      .string()
      .required("O texto é obrigatório!")
      .min(50, "O texto precisa conter pelo menos 50 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <div>
      <Form onSubmit={handleSubmit(createNote)}>
        <h2>Adicionar nota</h2>
        <FormInput type="text" {...register("title")} maxLength={150} placeholder="Preencha um título"/>
        {errors.title?.message && (
          <p className="errors">{errors.title.message}</p>
        )}

        <FormTextarea {...register("text")} placeholder="Preencha uma descrição"></FormTextarea>
        {errors.text?.message && (
          <p className="errors">{errors.text.message}</p>
        )}

        <Button tag="button" type="submit" fullWidth={true}>
          Cadastrar nota
        </Button>
      </Form>
    </div>
  );
};

export default NoteForm;
