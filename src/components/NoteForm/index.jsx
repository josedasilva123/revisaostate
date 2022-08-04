import React from 'react'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const NoteForm = ({submit}) => {
  const formSchema = yup.object().shape({
    title: yup.string().required('O título é obrigatório!'),
    text: yup.string().required('O texto é obrigatório!').min(50, "A mensagem precisa conter pelo menos 50 caracteres.")
  })
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(formSchema),
  })
  return (
    <div>
        <form
          onSubmit={handleSubmit(submit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "4rem",
          }}
        >
          <input
            type="text"
            {...register('title')}
          />
          {errors.title?.message}
          <textarea
            {...register('text')}
          ></textarea>
          {errors.text?.message}
          <button>Adicionar a nota</button>
        </form>
      </div>
  )
}

export default NoteForm