import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuItem(props) {
  return (
    <li className="menu-item">
      <NavLink to={props.link}>{props.text}</NavLink>;
    </li>
  );
}
