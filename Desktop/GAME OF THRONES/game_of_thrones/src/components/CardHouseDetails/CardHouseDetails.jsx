import React from "react";

export default function CardHouseDetails({ house }) {
  return (
    <section>
      <figure>
        <div>
          <img src="{house.imageURL}" alt="" />
          <h2>{house.name}</h2>
        </div>
      </figure>

      <figure>
        <div>
          <h3>LEMA</h3>
          <p>{house.words}</p>
        </div>
        <div>
          <h3>SEDE</h3>
          <p>{house.seat}</p>
        </div>
        <div>
          <h3>REGION</h3>
          <p>{house.region}</p>
        </div>
        <div>
          <h3>ALIANZAS</h3>
          <p>{house.allegiance}</p>
        </div>
        <div>
          <h3>FUNDACION</h3>
          <p>{house.createdAt}</p>
        </div>
      </figure>
    </section>
  );
}
