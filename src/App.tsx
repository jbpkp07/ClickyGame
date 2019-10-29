import React from "react";

import { Counter } from "./components/Counter";


const groceries: object[] = [
  {
    id: 1,
    name: "Milk",
    purchased: true
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false
  },
  {
    id: 6,
    name: "Juice",
    purchased: true
  }
];


export function App(): JSX.Element {

  return (

    <Counter initialCount={0} name={"Jeremy"} groc={groceries}>

        <strong>Jeremy</strong>

    </Counter>
  );
}