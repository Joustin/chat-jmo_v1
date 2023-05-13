import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
      <p>Justin Morgan</p>
      <NavLink id="Home" to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink id="Chat" to="/chat" className="nav-link">
        Chat~JMo
      </NavLink>
    </nav>
  );
};

export default MainNav;
