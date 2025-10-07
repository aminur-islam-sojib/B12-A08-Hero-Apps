import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { GrGithub } from 'react-icons/gr';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            <li>
              <NavLink to={'/'} className={` font-medium`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/Apps'} className={`  font-medium`}>
                {' '}
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to={'/Installed'} className={` font-medium`}>
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to={'/'}
          className=" text-xl h-5 md:h-10 overflow-hidden flex items-center gap-2 "
        >
          <img src={Logo} alt="" className=" h-[100%] w-auto" />{' '}
          <span className=" font-medium gradient-text">AppNest</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-5 px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative bottomBar font-medium ${
                  isActive ? 'gradient-text' : 'text-black'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/Apps'}
              className={({ isActive }) =>
                `relative bottomBar font-medium ${
                  isActive ? 'gradient-text' : 'text-black'
                }`
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/Installed'}
              className={({ isActive }) =>
                `relative bottomBar font-medium ${
                  isActive ? 'gradient-text' : 'text-black'
                }`
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="navbar-end">
          <a
            href="https://github.com/aminur-islam-sojib"
            target="_blank"
            rel="noopener noreferrer"
            className="btnGradient"
          >
            <span className=" flex text-center items-center gap-2">
              {' '}
              <GrGithub /> Contribute
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
