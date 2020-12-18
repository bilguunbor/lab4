import React from "react";
import MenuItem from "../MenuItem/Index";
import "./styte.module.css";
const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <MenuItem link="/example" text="Example" />
        <MenuItem link="/p2" text="p2" />
        <MenuItem link="/" text="root" />
      </ul>
    </div>
  );
};
export default Menu;
