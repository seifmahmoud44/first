import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h1 className="logo">CRUD</h1>
      <div className="links">
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/add"}>ADD</NavLink>
      </div>

      <NavLink className="Sign-in" to={"/signin"}>
        Sign in
      </NavLink>
    </div>
  );
};

export default Navbar;
