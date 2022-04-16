import React from "react";
import Navigator from "../../components/Navigator/Navigator";

import "./Home.scss";

export default function Home() {
  return (
    <div className="p-background">
    <Navigator/>
      
      <div className="p-homeTitle">
        <h1 className="p-h1Title">GAME OF THRONES</h1>
      </div>
      
    </div>
  );
}
