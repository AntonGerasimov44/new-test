import React from "react";
import "./App.css";

import { componentsData } from "./utils/constants";
import QueryComponent from "./components/queryComponent";

function App() {
  return (
    <div className={"mainContainer"}>
      {componentsData.map((elem, key) => {
        const { nameOfComponent, refreshInterval_Secs } = elem;

        return (
          <QueryComponent
            nameOfComponent={nameOfComponent}
            refreshInterval_Secs={refreshInterval_Secs}
            key={key}
          />
        );
      })}
    </div>
  );
}

export default App;
