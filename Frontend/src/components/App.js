import React, { useState, useEffect } from "react";

import "../styles/App.css";
import State from "./States";
import Dataa from "./Data";
import SearchBar from "./SearchBar";
import { requestStates } from "../apis/covidStates";
import { requestData } from "../apis/covidData";

const App = () => {
  const [States, setStates] = useState([]);
  const [covidData, setCovidData] = useState([]);
  const [search, setSearch] = useState("");
  const [Data, setData] = useState(false);
  const [open, setOpen] = useState(true);

  const onSearchSubmit = async (term) => {
    const StatesArray = await requestStates(term.toLowerCase());
    setData(StatesArray.length === 0);
    setStates(StatesArray);
    setOpen(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await requestData(search);
      setCovidData(data);
    };
    fetchData();
  }, [search]);

  // console.log(search);
  const clearData = () => setStates([]);
  const Open = () => {
    setOpen(!open);
  };

  const renderedStates = States.map((states, i) => {
    return (
      <div onClick={Open}>
        {open && <State setSearch={setSearch} statesC={states} />}
      </div>
    );
  });

  return (
    <div className="app">
      <SearchBar
        onSearchSubmit={onSearchSubmit}
        clearData={clearData}
        onClick={Open}
      />

      {Data && <p className="no-Data">No data found</p>}
      <div className="main-content">{renderedStates}</div>
      <div>
        <h1>The Covid Cases of {search} are</h1>
        {covidData.map(function (data, i) {
          return <Dataa data={data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default App;
