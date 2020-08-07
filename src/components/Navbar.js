import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Photo Gallery</h1>
      <div className="buttons">
        <h3>Choose Theme</h3>
        <button className="dark"></button>
        <button className="light"></button>
      </div>
    </div>
  );
}

export default Navbar;
