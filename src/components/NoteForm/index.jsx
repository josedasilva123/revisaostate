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