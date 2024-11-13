import React from "react";

export function Example8() {
  // Example 8: Using Fragments

  const fragmentJSX = (
    <>
      <h1>Title</h1>
      <p>This is a paragraph inside a fragment.</p>
    </>
  );

  const fragmentCreateElement = React.createElement(
    React.Fragment,
    null,
    React.createElement("h1", null, "Title"),
    React.createElement("p", null, "This is a paragraph inside a fragment.")
  );

  return (
    <>
      {fragmentJSX}
      {fragmentCreateElement}
    </>
  );
}
