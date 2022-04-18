import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoBack.scss";

export default function GoBack() {
  const navigate = useNavigate();

  return (
    <>
      <button className="cajaFlecha" onClick={() => navigate(-1)}>
        <img className="flechaGoBack" src="/images/left-arrow.png" alt="" />
        Volver
      </button>
    </>
  );
}
