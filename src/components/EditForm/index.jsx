import React from 'react'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const EditForm = ({currentNote, setCurrentNote, notes, setNotes}) => {
  const formSchema = yup.object().shape({
    title: yup.string().required('O título é obrigatório'),
    text: yup.string().required('O campo de texto é obrigatório').min(50, "A mensagem precisa conter pelo menos 50 caracteres."),
  })

  function submit(formData){
    const noteIndex = notes.findIndex((n) => n === currentNote);
    const newNotes = [...notes];

    newNotes[noteIndex].text = formData.text;
    setNotes(newNotes);
    setCurrentNote(null);
  }
  
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
        title: currentNote.title,
        text: currentNote.text,
    },
  })
  
  return (
    <div>
        <button onClick={() => setCurrentNote(null)}>Fechar</button>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('title')} disabled/>
            {errors.title?.message}
            <textarea  {...register('text')}></textarea>
            {errors.text?.message}
            <button>Alterar</button>
        </form>
    </div>
  )
}

export default EditForm