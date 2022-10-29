import React, { useState } from "react";
import "./Input.css";
import { data } from "./Data";

function Input() {
  const [search, setSearch] = useState("");

  return (
    <div className="inputMain">
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search a person"
      />
      <div className="results">
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? null
              : item.first_name.toLowerCase().includes(search);
          })
          .map((item) => (
            <div className="resultsItems" key={item.id}>
              <h1>{item.first_name}</h1>
              <h1>{item.last_name}</h1>
              <h1>{item.email}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Input;
