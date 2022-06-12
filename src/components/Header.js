import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/todos">ToDos page</Link>
        </li>
        <li>
          <Link to="/theme">Theme Settings Page</Link>
        </li>
      </ul>
    </div>
  );
};
