import Nav from 'react-bootstrap/Nav';
import '../StyleSheets/component.css';
import { NavLink } from 'react-router-dom';

export default function Navigator() {
  return (
    <nav>
        <NavLink className="navItems" to="/profile">My Profile</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/learning">Learning</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="contact">Contact</NavLink>
    </nav>
  );
}