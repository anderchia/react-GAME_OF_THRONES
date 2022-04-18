import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CardCharacterDetails.scss";
import { useTranslation } from "react-i18next";

export default function CardCharacterDetails({ character }) {
  const [house, setHouses] = useState({});
  const { t } = useTranslation();

  useEffect(() => {
    axios({
      url: `https://api.got.show/api/show/houses/${character.house}`,
    })
      .then((response) => {
        setHouses(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [character.house, setHouses]);

  return (
    <section>
      <figure>
        <div className="b-detail">
          <img src={character.image} alt="" />
          <h2>{character.name}</h2>
        </div>
      </figure>

      <figure className="b-boxdetail">
        <div className="b-boxdetailimage">
          <h3>{t("description.part4")}</h3>
          {house && <img src={house.logoURL} alt="" />}
        </div>
        <div className="b-boxdetailsmall">
          <h3>{t("description.part5")}</h3>
          {character.allegiances &&
            character.allegiances.map((item, i) => (
              <p className="b-tipo" key={i}>
                {item}
              </p>
            ))}
        </div>
        <div className="b-boxdetailsmall">
          <h3>{t("description.part6")}</h3>
          <div className="timeline-container-small">
            {character.appearances &&
              character.appearances.map((item, i) => (
                <p className="b-tipo" key={i}>
                  {item}
                </p>
              ))}
          </div>
        </div>
        <div className="b-boxdetailsmall">
          <h3>{t("description.part7")}</h3>
          <p className="b-tipo">{character.father}</p>
        </div>
        <div className="b-boxdetailsmall">
          <h3>{t("description.part8")}</h3>
          {character.siblings &&
            character.siblings.map((item, i) => (
              <p className="b-tipo" key={i}>
                {item}
              </p>
            ))}
        </div>
        <div className="b-boxdetailsmall ">
          <h3>{t("description.part9")}</h3>
          <div className="timeline-container-small">
            {character.titles &&
              character.titles.map((item, i) => (
                <p className="b-tipo" key={i}>
                  {item}
                </p>
              ))}
          </div>
        </div>
      </figure>
    </section>
  );
}
