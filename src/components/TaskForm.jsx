import { useState } from 'react'
import api from '../services/api.js'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return
    try {
      setSaving(true)
      const { data } = await api.post('/tasks', { title })
      setMessage(`Creada: #${data.id} - ${data.title}`)
      setTitle('')
    } catch {
      setMessage('No se pudo crear la tarea')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <label className="form-label">Nueva tarea</label>
        <input
          className="form-control"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Escribe el título..."
          disabled={saving}
        />
      </div>
      <button className="btn btn-primary" disabled={saving}>
        {saving ? 'Guardando...' : 'Agregar'}
      </button>
      {message && <p className="mt-2 muted">{message}</p>}
    </form>
  )
}