import React from 'react'

const NotesFilter = ({setFilter}) => {
  return (
    <div>
        { /* Os botões alteram o estado filter (que dispara o efeito) */}
        <button onClick={() => setFilter("")}>Filtrar</button>        
        <button onClick={() => setFilter("tarefas")}>Tarefas</button>
        <button onClick={() => setFilter("recados")}>Recados</button>
        <button onClick={() => setFilter("anotacoes")}>Anotações</button>
      </div>
  )
}

export default NotesFilter