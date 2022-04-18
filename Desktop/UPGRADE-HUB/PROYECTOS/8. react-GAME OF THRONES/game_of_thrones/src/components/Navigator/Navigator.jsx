import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.scss";
import { useTranslation } from "react-i18next";

const lngs = {
  es: { nativeName: "spanish" },
  en: { nativeName: "english" },
};

export default function Navigator() {
  const { t, i18n } = useTranslation();
  return (
    <div className="b-navGeneral">
      <div className="b-buttons">
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            className="b-buttonNav"
            style={{ backgroundImage: "url(/images/" + lng + ".jpg)" }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          ></button>
        ))}
      </div>

      <ul className="c-nav">
        <Link className="underline" to="/characters">
          {t("description.part1")}
        </Link>
        <Link className="underline" to="/houses">
          {t("description.part2")}
        </Link>
        <Link className="underline" to="/cronology">
          {t("description.part3")}
        </Link>
      </ul>
    </div>
  );
}
