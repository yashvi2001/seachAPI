import React from "react";

import "../styles/SearchBar.css";

const Dataa = ({ data }) => {
  return (
    <>
      <div class="card">
        <div class="container">
          <h4>
            <b>Date: {data.date}</b>
          </h4>
          <h4>
            <b>Fips: {data.fips}</b>
          </h4>
          <h4>
            <b>Cases :{data.cases}</b>
          </h4>
          <h4>
            <b> Deaths: {data.deaths}</b>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Dataa;
