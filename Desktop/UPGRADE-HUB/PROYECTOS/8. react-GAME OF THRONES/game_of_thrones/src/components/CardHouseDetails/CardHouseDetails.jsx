import React from "react";
import { useTranslation } from "react-i18next";
import "./CardHouseDetails.scss";

export default function CardHouseDetails({ house }) {
  const { t } = useTranslation();
  return (
    <section className="paginaDetalle">
      <figure>
        <div className="b-detail">
          <img src={house.logoURL} alt="" />
          <h2>{house.name}</h2>
        </div>
      </figure>

      <figure className="b-boxdetail">
        <div className="b-boxdetaiddetail">
          <h3>{t("description.part10")}</h3>
          <p className="b-tipo">{house.words}</p>
        </div>
        <div>
          <h3>{t("description.part11")}</h3>
          <p className="b-tipo">{house.seat}</p>
        </div>
        <div>
          <h3>{t("description.part12")}</h3>
          <p className="b-tipo">{house.region}</p>
        </div>
        <div>
          <h3>{t("description.part13")}</h3>
          <p className="b-tipo">{house.allegiance}</p>
        </div>
        <div>
          <h3>{t("description.part14")}</h3>
          <p className="b-tipo">{house.createdAt}</p>
        </div>
      </figure>
    </section>
  );
}
