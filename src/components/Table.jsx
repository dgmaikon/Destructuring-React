import React, { useState } from "react";
import animals, { useAnimals } from "./data";
import cars, { useCars } from "./practice";

const [Honda, Tesla] = cars;
const [cat, dog] = animals;

/* const {
  feedingRequirements: { food, water },
} = cat; */

/* const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound(); */

const {
  speedStats: { topSpeed: hondaTopSpeed },
  hondaTopColour,
} = Honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
  teslaTopColour,
} = Tesla;

/* const [car] = useCars(Honda); */

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
