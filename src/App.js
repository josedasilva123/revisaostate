import "./App.css";

import { useState } from "react";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const noteList = [
    {
      id: 0,
      title: "Nota 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in placerat orci. Vestibulum sit amet dapibus elit. Nullam bibendum nulla in ex elementum convallis.",
    },
    {
      id: 1,
      title: "Nota 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in placerat orci. Vestibulum sit amet dapibus elit. Nullam bibendum nulla in ex elementum convallis.",
    },
    {
      id: 2,
      title: "Nota 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in placerat orci. Vestibulum sit amet dapibus elit. Nullam bibendum nulla in ex elementum convallis.",
    },
  ];

  /* GET / SET --- useState(valorInicial) */

  const [notes, setNotes] = useState(noteList); //Estado que recebe a lista de notas
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  }); //Estado que recebe os valores dos campos do formulário e condensa em um objeto
  const [counter, setCounter] = useState(noteList.length); //Contador com valor inicial com base na lista

  /* Função de criação de notas por meio submit de formulário */
  function handleSubmit(e) {
    e.preventDefault();

    //Validação simples para verificar se os campos estão preenchidos
    if (formData.title === "" || formData.text === "") {
      alert("Preencha os campos antes de enviar");
    } else {
      //Criar um nova nota, pegando o counter como id os valores do formData para os demais campos
      const newNote = {
        id: counter,
        title: formData.title,
        text: formData.text,
      };

      //Altera o estado de notas, pegando todas as notas atuais e adicionando a nova nota
      setNotes([...notes, newNote]);

      //Incrementa o contador para evitar ids repetidos
      setCounter(counter + 1);

      //Limpa os campos do formulário, atribuindo valores vazios a title e text
      setFormData({
        title: "",
        text: "",
      });
    }
  }

  //Função de remover
  function handleRemove(id){
    //Filtragem mantendo todos os itens com exceção do que a id do enviado (remoção de item)
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList); //Atribui a newList como valor de notes
  }

  return (
    <div className="App">
      <NoteList notes={notes} handleRemove={handleRemove} />
      <NoteForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />      
    </div>
  );
}

export default App;
