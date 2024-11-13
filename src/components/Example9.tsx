import React from "react";

export function Example9() {
  // Example 9: Inline Styling

  const style = {
    color: "orange",
    fontWeight: "bold",
    backgroundColor: "#432E54",
    padding: "20px",
  };

  const styledJSX = <h1 style={style}>Styled Heading</h1>;

  const styledCreateElement = React.createElement(
    "h1",
    {
      style,
    },
    "Styled Heading"
  );

  return (
    <>
      {styledJSX}
      {styledCreateElement}
    </>
  );
}
