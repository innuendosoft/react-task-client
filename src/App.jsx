import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './styles.css'

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand">
        <div className="container-narrow">
          <Link className="navbar-brand text-light" to="/">Tasks</Link>
          <div className="navbar-nav">
            <NavLink className="nav-link text-light" to="/">Home</NavLink>
            <NavLink className="nav-link text-light" to="/about">About</NavLink>
          </div>
        </div>
      </nav>
      <main className="container-narrow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  )
}