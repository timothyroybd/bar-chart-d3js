import * as d3 from "d3";
export const message = (data) => {
  let message = "";
  message = message + Math.round(d3.csvFormat(data).length / 1024) + "KB\n";
  console.log(message);
  console.log(typeof message);
  message = message + data.length + "rows\n";
  console.log(message);
  console.log(typeof message);
  message = message + data.columns.length + "columns";
  console.log(message);
  console.log(typeof message);
  return message;
};
