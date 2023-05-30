import { Link } from "react-router-dom";
import '../App.css'


const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New Poll</Link>
        </li>
        <li>
          <Link to="/leader">Leader Board</Link>
        </li>
        <li>
          <Link to="/loging">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
