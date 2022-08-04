import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="p-5 text-center header-text text-light">
      <i class="fa-solid fa-atom spinner-icon"></i>
      <Link
        className="todo-header-text text-italic home-link float-left ml-5 text-light"
        to="/"
      >
        Home
      </Link>
      <div className="font-weight-bold">Todo App</div>
    </div>
  );
}

export default Header;
