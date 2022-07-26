import React, { useState, useContext } from "react";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormCreateNote, NotesContext } from "../../contexts/NotesContext";
import { Button } from "../../styles/buttons";
import { Form, FormInput, FormTextarea } from "../../styles/form";

const NoteForm = () => {
  const { createNote } = useContext(NotesContext);
  const [loading, setLoading] = useState(false);
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
  } = useForm<IFormCreateNote>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IFormCreateNote> = (formData) => {
    createNote(formData, setLoading);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Adicionar nota</h2>
        <FormInput type="text" {...register("title")} maxLength={150} placeholder="Preencha um título"/>
        {errors.title?.message && (
          <p className="errors">{errors.title.message}</p>
        )}

        <FormTextarea {...register("text")} placeholder="Preencha uma descrição"></FormTextarea>
        {errors.text?.message && (
          <p className="errors">{errors.text.message}</p>
        )}

        <Button tag="button" type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </Button>
      </Form>
    </div>
  );
};

export default NoteForm;
