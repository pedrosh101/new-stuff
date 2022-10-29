import React from "react";
import Language from "./Language";
import "./PageHeader.css";
import { useTranslation } from "react-i18next";

function PageHeader() {
  const { t } = useTranslation();

  return (
    <>
      <section className="initContainer">
        <div className="langContainer">
          <Language />
        </div>
        <div className="initText">
          <h1>{t("main_title")}</h1>
          <p>{t("main_quote")} </p>
        </div>
      </section>
    </>
  );
}

export default PageHeader;
