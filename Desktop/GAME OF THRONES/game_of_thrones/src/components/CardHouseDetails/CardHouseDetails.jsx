import React from "react";
import "./CardHouseDetails.scss";

export default function CardHouseDetails({ house }) {
  return (
    <section>
      <figure>
        <div className="b-detail">
          <img src={house.logoURL} alt="" />
          <h2>{house.name}</h2>
        </div>
      </figure>

      <figure className="b-boxdetail">
        <div className="b-boxdetaiddetail">
          <h3>LEMA</h3>
          <p className="b-tipo">{house.words}</p>
        </div>
        <div>
          <h3>SEDE</h3>
          <p className="b-tipo">{house.seat}</p>
        </div>
        <div>
          <h3>REGION</h3>
          <p className="b-tipo">{house.region}</p>
        </div>
        <div>
          <h3>ALIANZAS</h3>
          <p className="b-tipo">{house.allegiance}</p>
      
        </div>
        <div>
          <h3>FUNDACION</h3>
          <p className="b-tipo">{house.createdAt}</p>
        </div>
      </figure>
    </section>
  );
}
