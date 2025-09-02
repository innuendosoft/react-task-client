import TaskList from '../components/TaskList.jsx'
import TaskForm from '../components/TaskForm.jsx'
export default function Home() {
  return (
    <div className="mt-4">
      <div className="card-dark mb-3">
        <h2 className="mb-2">Tareas</h2>
        <p className="muted">CRUD simple consumiendo la API Node: listar, crear y eliminar.</p>
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card-dark">
            <TaskForm />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-dark">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  )
}