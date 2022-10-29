import React from "react";
import i18next from "i18next";
import "./PageHeader.css";


const languages = [
  {
    code: "pt",
    name: "PT",
    country_code: "pt",
  },
  {
    code: "en",
    name: "EN",
    country_code: "gb",
  },
];

function Language() {
  return (
    <>
      <ul className="lang">
        {languages.map(({ code, name, country_code }) => (
          <li key={country_code}>
            <button onClick={() => i18next.changeLanguage(code)}>{name}</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Language;
