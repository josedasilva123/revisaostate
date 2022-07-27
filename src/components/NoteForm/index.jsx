import React from 'react'

const NoteForm = ({ handleSubmit, formData, setFormData }) => {
  return (
    <div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            padding: "4rem",
          }}
        >
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <select onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }>
              <option value="tarefas" selected={formData.category === "tarefas" ? true : false}>Tarefas</option>
              <option value="recados" selected={formData.category === "recados" ? true : false}>Recados</option>
              <option value="anotacoes" selected={formData.category === "anotacoes" ? true : false}>Anotações</option>
          </select>
          <textarea
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          ></textarea>
          <button>Adicionar a nota</button>
        </form>
      </div>
  )
}

export default NoteForm