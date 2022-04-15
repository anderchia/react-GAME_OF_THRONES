import React from "react";
import Casa from "../../components/Casa/Casa";
import "./Home.scss";

export default function Home() {
  return (
    <div className="p-background">
      <div>
        <Casa />
      </div>
      
      <div className="p-homeTitle">
        <h1 className="p-h1Title">GAME OF THRONES</h1>
      </div>
      
    </div>
  );
}
