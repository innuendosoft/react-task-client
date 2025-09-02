export default function About() {
  return (
    <div className="mt-4 card-dark">
      <h2>About</h2>
      <p className="muted">
        Proyecto demo en React (Vite) que consume la Node API Tasks. 
        Ideal para mostrar integración fullstack rápida: React + Node + Deploy.
      </p>
      <ul>
        <li>Routing con react-router-dom</li>
        <li>Fetch con Axios</li>
        <li>Estilos simples + Bootstrap</li>
      </ul>
    </div>
  )
}