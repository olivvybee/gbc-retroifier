import { Link } from 'react-router-dom';

import './Navbar.scss';

export const Navbar = () => (
  <nav id="navbar">
    <div id="navbar-wrapper" className="container-md">
      <ul id="navbar-list">
        <Link to="/" className="navbar-brand">
          <h1>Retroifier</h1>
        </Link>

        <li className="nav-item">
          <Link to="/palettes" className="nav-item-link link-light">
            Colour palettes
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-item-link link-light">
            About
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
