import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <nav className="w-screen bg-white p-2 flex items-center justify-around">
      <div className="flex items-center gap-8">
        <img className="w-16" src={logo} alt="logo" />
        <h1 className="font-bold">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="flex items-center list-none gap-8">
        <li>
          <NavLink
            to="/"
            className="text-lg text-sky-500 focus:underline"
            end
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/missions"
            className="text-lg text-sky-500 focus:underline"
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className="text-lg text-sky-500 focus:underline"
          >
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
