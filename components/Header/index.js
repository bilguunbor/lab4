import React from "react";
import MenuItem from "../MenuItem/Index";
import "./style.module.css";
const Header = () => {
  return (
    <div className="header">
      <a href="getting-started.html">Example</a>
      <a href="p2.html">p2</a>
      {/* <MenuItem link="/example" text="Example" />
      <MenuItem link="/p2" text="p2" /> */}
    </div>
  );
};
export default Header;
