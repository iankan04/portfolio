import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className='header'>
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="bg-linear-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">IK</p>
        </NavLink>
        <nav className="flex gap-7 text-lg font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar;