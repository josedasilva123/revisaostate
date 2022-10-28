/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormEditNote, NotesContext } from '../../contexts/NotesContext';
import { EditModal } from './styles';
import { MdClose } from "react-icons/md"
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Form, FormInput, FormTextarea } from '../../styles/form';
import { Button } from '../../styles/buttons';

const EditForm = () => {
  const { currentNote, setCurrentNote, editNote } = useContext(NotesContext);

  const formSchema = yup.object().shape({
    title: yup.string().required('O título é obrigatório!').max(150, 'O título não pode ser superior a 150 caracteres.'),
    text: yup.string().required('O texto é obrigatório!').min(50, "O texto precisa conter pelo menos 50 caracteres"),
  })

  const { register, handleSubmit, formState: {errors}} = useForm<IFormEditNote>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      title: currentNote?.title,
      text: currentNote?.text,
    }
  })

  //Instanciando hook customizado e passando comportamento desejado como função callback
  //Arrumar depois
  const modalRef = useOutsideClick<HTMLDivElement>(() => {
    setCurrentNote(null);
  })

  return (
    <EditModal>
      <div className="content" ref={modalRef}>
        <button onClick={() => setCurrentNote(null)} className="close">
          <MdClose size={24} />
        </button>
        <Form onSubmit={handleSubmit(editNote)}>
          <FormInput type="text" {...register('title')} disabled/>
          {errors.title?.message && <p className="errors">{errors.title.message}</p>}

          <FormTextarea {...register('text')}></FormTextarea>
          {errors.text?.message && <p className="errors">{errors.text.message}</p>}

          <Button tag="button" type="submit">Atualizar</Button>
        </Form>
      </div>
    </EditModal>
  )
}

export default EditForm