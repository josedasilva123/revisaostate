import React from 'react'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const EditForm = ({currentNote, setCurrentNote, notes, setNotes}) => {
  //Esquema de validação
  const formSchema = yup.object().shape({
    title: yup.string().required('O título é obrigatório!').max(150, 'O título não pode ser superior a 150 caracteres.'),
    text: yup.string().required('O texto é obrigatório!').min(50, "O texto precisa conter pelo menos 50 caracteres"),
  })

  function submit(formData){
    //Descobrindo o index da nota selecionada
    const noteIndex = notes.indexOf(currentNote);
    //Criando uma copia do estado note
    const newNotes = [...notes];

    //Realizando a mutanção na copia
    newNotes[noteIndex].text = formData.text;

    //Mandando a nova lista(mutada) para o estado de notas
    setNotes(newNotes);
    //Limpando a seleção de nota
    setCurrentNote(null);
  }

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
      <form onSubmit={handleSubmit(submit)} className="form">
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