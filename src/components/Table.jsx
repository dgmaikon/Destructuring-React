import React, { useState } from "react";
import ReactDom from "react-dom";
import cars from "./practice";

const [Honda, Tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed },
  hondaTopColour,
} = Honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour],
} = Tesla;

function Table() {
  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{Tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{Honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  );
}

export default Table;
