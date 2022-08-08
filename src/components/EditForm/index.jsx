import React, { useContext } from 'react'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { NotesContext } from '../../contexts/NotesContext';

const EditForm = () => {
  const { currentNote, setCurrentNote, editNote } = useContext(NotesContext);

  const formSchema = yup.object().shape({
    title: yup.string().required('O título é obrigatório!').max(150, 'O título não pode ser superior a 150 caracteres.'),
    text: yup.string().required('O texto é obrigatório!').min(50, "O texto precisa conter pelo menos 50 caracteres"),
  })  

  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      title: currentNote.title,
      text: currentNote.text,
    }
  })
  return (
    <div>
      <button onClick={() => setCurrentNote(null)}>Fechar</button>
      <form onSubmit={handleSubmit(editNote)} className="form">
        <input type="text" {...register('title')} disabled/>
        {errors.title?.message && <p className="errors">{errors.title.message}</p>}
        <textarea {...register('text')}></textarea>
        {errors.text?.message && <p className="errors">{errors.text.message}</p>}
        <button>Atualizar</button>
      </form>
    </div>
  )
}

export default EditForm