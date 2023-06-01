import { Link } from "react-router-dom";
import '../App.css'

const handleLogingOut = () => {
  console.log(" The user is out ")
}

const Nav = () => {
  return (
    <div className="nav-containes">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New Poll</Link>
          </li>
          <li>
            <Link to="/leader">Leaders Board</Link>
          </li>
          <li>
            <Link to="/loging" onClick={handleLogingOut}>Login out</Link>
          </li>
        </ul>
      </nav>
      <span>
        <img className="user-avatar" alt="user avatar" src={"https://tylermcginnis.com/would-you-rather/dan.jpg"}/>
      </span>

    </div>
  );
};

export default Nav;
