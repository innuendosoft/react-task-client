import { useEffect, useState } from 'react'
import api from '../services/api.js'

export default function TaskList() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const load = async () => {
    try {
      setLoading(true)
      const { data } = await api.get('/tasks')
      setTasks(data)
    } catch (e) {
      setError('No se pudo cargar la lista.')
    } finally {
      setLoading(false)
    }
  }

  const remove = async (id) => {
    try {
      await api.delete(`/tasks/${id}`)
      setTasks(prev => prev.filter(t => t.id !== id))
    } catch {
      alert('No se pudo eliminar')
    }
  }

  useEffect(() => { load() }, [])

  if (loading) return <p className="muted">Cargando...</p>
  if (error) return <p className="text-danger">{error}</p>

  return (
    <div>
      {tasks.length === 0 && <p className="muted">No hay tareas.</p>}
      <ul className="list-group">
        {tasks.map(t => (
          <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{t.title} {t.completed ? '✅' : ''}</span>
            <button className="btn btn-sm btn-danger" onClick={() => remove(t.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}