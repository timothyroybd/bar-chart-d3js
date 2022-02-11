import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
import * as d3 from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/troyLCC/5233223cbb6fc45282f054c0ddf2522a/raw/cssNameColors.csv";
const width = 960;
const height = 500;

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    d3.csv(csvUrl).then((data) => {
      setData(data);
      console.log("Fetch Data");
    });
  }, []);

  return (
    <svg width={width} height={height}>
      <div>
        {data.map((d) => {
          return (
            <div
              style={{ backgroundColor: d.RGB, width: "600px", height: "30px" }}
            ></div>
          );
        })}
      </div>
    </svg>
  );
}

export default App;
