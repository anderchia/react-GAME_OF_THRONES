import React from "react";
import { Link } from "react-router-dom";
import "./Casa.scss";

export default function Casa() {
  return (
    <div className="homeIcon">
      <Link to="/" className="b-imagenHome">
        <img src="/images/house.png" alt=""></img>
      </Link>
    </div>
  );
}
