import React from "react";

export function Example6() {
  // Example 6: Rendering Lists

  const fruits = ["Apple", "Banana", "Cherry"];
  const vegetables = ["Carrot", "Onion", "Spinach"];

  const listJSX = (
    <ul>
      <h1>Fruits</h1>
      {fruits.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const listCreateElement = React.createElement(
    "ul",
    null,
    React.createElement("h1", null, "Vegetables"),
    vegetables.map((item, index) =>
      React.createElement("li", { key: index }, item)
    )
  );

  return (
    <div>
      {listJSX}
      {listCreateElement}
    </div>
  );
}
