import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
    <h1>Mais do que bebidas, vamos celebrar o encontro!!</h1>
    <Outlet />
  </>
);

export default Layout;
