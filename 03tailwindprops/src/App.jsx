import React from "react";
import Card from "./components/card.jsx";

function App() {
  // Object defined but not used - either use it or remove it
  // const myObj = {
  //   name: "anas",
  //   age: 21,
  //   address: {
  //     city: "navi mumbai",
  //     state: "maharashtra",
  //     country: "india",
  //   },
  // };

  const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <Card username="Anas" myArr={newArr} />
      <Card username="json" post="staff engineer" />
      <Card />
    </div>
  );
}

export default App;
